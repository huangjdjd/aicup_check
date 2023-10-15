
import time
import gradio as gr
import requests
# For local streaming, the websockets are hosted without ssl - http://
HOST = 'localhost:5000'
URI = f'http://203.145.216.157:58108/api/v1/generate'

# For reverse-proxied streaming, the remote will likely host with ssl - https://
# URI = 'https://your-uri-here.trycloudflare.com/api/v1/generate'

class Promper:
  def __init__(self, template: str='', pattern: str=None):
    self.template = template
    self.pattern = pattern
    self.inputs = self.extract()
    self.records = []

  def extract():
    print(self.template, self.pattern)
    return None

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def run(prompt):
    request = {
        'prompt': prompt,
        'max_new_tokens': 1024,
        'auto_max_new_tokens': False,
        'max_tokens_second': 0,

        # Generation params. If 'preset' is set to different than 'None', the values
        # in presets/preset-name.yaml are used instead of the individual numbers.
        'preset': 'None',
        'do_sample': True,
        'temperature': 0.7,
        'top_p': 0.9,
        'typical_p': 1,
        'epsilon_cutoff': 0,  # In units of 1e-4
        'eta_cutoff': 0,  # In units of 1e-4
        'tfs': 1,
        'top_a': 0,
        'repetition_penalty': 1.18,
        'repetition_penalty_range': 0,
        'top_k': 40,
        'min_length': 0,
        'no_repeat_ngram_size': 0,
        'num_beams': 1,
        'penalty_alpha': 0,
        'length_penalty': 1,
        'early_stopping': False,
        'mirostat_mode': 0,
        'mirostat_tau': 5,
        'mirostat_eta': 0.1,
        'grammar_string': '',
        'guidance_scale': 1,
        'negative_prompt': '',

        'seed': -1,
        'add_bos_token': True,
        'truncation_length': 2048,
        'ban_eos_token': False,
        'custom_token_bans': '',
        'skip_special_tokens': True,
        'stopping_strings': []
    }

    response = requests.post(URI, json=request)

    if response.status_code == 200:
        result = response.json() #['results'][0]['text']
        return result
        #print(prompt + result)



#紀錄該段落是否已經通過檢測的dict，key 為段落；value 為是否通過(1為通過，0為未通過)
Passed = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 8: 0}

#檢查用的function，input_text為要檢核的段落內容；part為第幾段
#關鍵字: 檢核通過  (如果AI回覆為通過，則務必請AI在reply中加入繁體 "檢核通過" 以方便判定)
def check(input_text, part):
    condition = [" ", 
               "1.字數為100-800字  2.有提到使用的作業系統、語言、套件(函式庫)、預訓練模型、額外資料集等 3.如提到使用預訓練模型及額外資料集，需逐一列出來源",
               "1.字數為300-1600字 2.說明演算法設計、模型架構與模型參數，包括可能使用的特殊處理方式",
               "1.字數為250-1600字 2.說明演算法之創新性或者修改外部資源的哪一部分",
               "1.字數為200-700字 2.說明對資料的處理或擴增的方式，例如對資料可能的刪減、更正或增補",
               "1.字數為300-1200字 2.明模型的訓練方法與過程",
               "1.字數為300-1200字 2.分析所使用的模型及其成效，簡述未來可能改進的方向。分析必須附圖，可將幾個成功的和失敗的例子附上並說明之",
               "",
               "1.字數為300-1200字 2.內容規定：參考文獻請以APA格式為主"
               ]
    examples = [
      "等一下將會輸入一些條件與一個段落，請你幫我檢測輸入的段落有沒有符合條件。 \
      輸入的格式為：條件  +  段落（條件與段落中間以“+”分隔）。 \
      如果該段落符合條件，請回覆“檢核通過”這四個繁體中文字， \
      如果沒有通過，請在你回覆的一開始加入“檢核未通過” \
      輸入開始: "  
      + condition[part] + "+" + input_text
    ]
    prompt = f"""<bos>Human
    {examples[0]}<eos>
<bos>Assistant"""
    result = run(prompt)
    response = result['results'][0]['text']
    
    #更新通過紀錄Passed
    if "檢核通過" in response:
        Passed[part] = 1
    else:
        Passed[part] = 0
    # str(response)
    return str(response)  #回傳AI的回覆

#取得Passed dict裡面的值
def getPassed(part):
    return Passed[part]

#取得總進度
def getProgress():
    progress = str(int((getPassed(1) + getPassed(2) + getPassed(3) + getPassed(4) + getPassed(5) + getPassed(6) + getPassed(8)) / 7 * 100))
    return progress

#更新所有進度
def updateValue():
    
    dict = {"完成度" + getProgress() + "%": 1, 
                "壹、環境": getPassed(1), "貳、演算方法與模型架構": getPassed(2), "參、創新性": getPassed(3), 
                "肆、資料處理": getPassed(4), "伍、訓練方式": getPassed(5), "陸、分析與結論": getPassed(6), "捌、使用的外部資源與參考文獻": getPassed(8)}
    return dict
    


#主頁面
with gr.Blocks() as demo:
    gr.Markdown(
    """
    # 報告檢核系統
    請依序輸入要檢核的段落
    """)
    with gr.Row():
        with gr.Column(scale=1):
            labels = gr.Label(
                    label="完成度",
                    value=updateValue(),
                    container=True,
                    show_label=False,
                    visible=True,
                    
                    )
            labels.change(fn=updateValue,inputs=None,outputs=labels,every=0.1,)
                
        with gr.Column(scale=3):
            
            with gr.Tab(label="壹、環境"):
                input = gr.Textbox(max_lines=7, lines=7, label="請說明使用的作業系統、語言、套件(函式庫)、預訓練模型、額外資料集等。如使用預訓練模型及額外資料集，請逐一列出來源。(200~600字)")
                check_btn = gr.Button("Check")
                part = gr.Slider(1, 8, value=1, visible = False)
                output = gr.Textbox(label="段落檢核結果")
                check_btn.click(fn=check, inputs=[input,part], outputs=output)
                
                
            with gr.Tab(label="貳、演算方法與模型架構"):
                input = gr.Textbox(max_lines=7, lines=7, label="說明演算法設計、模型架構與模型參數，包括可能使用的特殊處理方式。(400~1200字)")
                check_btn = gr.Button("Check")
                part = gr.Slider(1, 8, value=2, visible = False)
                output = gr.Textbox(label="段落檢核結果")
                check_btn.click(fn=check, inputs=[input,part], outputs=output)
                
            with gr.Tab(label="參、創新性"):
                input = gr.Textbox(max_lines=7, lines=7, label="說明演算法之創新性或者修改外部資源的哪一部分。(300~1200字)")
                check_btn = gr.Button("Check")
                part = gr.Slider(1, 8, value=3, visible = False)
                output = gr.Textbox(label="段落檢核結果")
                check_btn.click(fn=check, inputs=[input,part], outputs=output)
                
            with gr.Tab(label="肆、資料處理"):
                input = gr.Textbox(max_lines=7, lines=7, label="說明對資料的處理或擴增的方式，例如對資料可能的刪減、更正或增補。(300~1500字)")
                check_btn = gr.Button("Check")
                part = gr.Slider(1, 8, value=4, visible = False)
                output = gr.Textbox(label="段落檢核結果")
                check_btn.click(fn=check, inputs=[input,part], outputs=output)
                
            with gr.Tab(label="伍、訓練方式"):
                input = gr.Textbox(max_lines=7, lines=7, label="說明模型的訓練方法與過程。(400~1000字)")
                check_btn = gr.Button("Check")
                part = gr.Slider(1, 8, value=5, visible = False)
                output = gr.Textbox(label="段落檢核結果")
                check_btn.click(fn=check, inputs=[input,part], outputs=output)
                
            with gr.Tab(label="陸、分析與結論"):
                input = gr.Textbox(max_lines=7, lines=7, label="分析所使用的模型及其成效，簡述未來可能改進的方向。分析必須附圖，可將幾個成功的和失敗的例子附上並說明之。(400~2500字)")
                check_btn = gr.Button("Check")
                part = gr.Slider(1, 8, value=6, visible = False)
                output = gr.Textbox(label="段落檢核結果")
                check_btn.click(fn=check, inputs=[input,part], outputs=output)
                
            with gr.Tab(label="捌、使用的外部資源與參考文獻"):
                input = gr.Textbox(max_lines=7, lines=7, label="參考文獻請以APA格式為主。")
                check_btn = gr.Button("Check")
                part = gr.Slider(1, 8, value=8, visible = False)
                output = gr.Textbox(label="段落檢核結果")
                check_btn.click(fn=check, inputs=[input,part], outputs=output)
        
    
        
demo.queue().launch(share=True)