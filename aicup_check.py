import openai
import gradio as gr

openai.api_key = "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"

#紀錄該段落是否已經通過檢測的dict，key 為段落；value 為是否通過(1為通過，0為未通過)
Passed = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 8: 0}


#檢查用的function，input_text為要檢核的段落內容；part為第幾段
#關鍵字: 檢核通過  (如果AI回覆為通過，則務必請AI在reply中加入繁體 "檢核通過" 以方便判定)
def check(input_text, part):
    
    
    reply = "adasdasds檢核通過"  #隨便假設的
    
    #更新通過紀錄Passed
    if "檢核通過" in reply:
        Passed[part] = 1
        setColor(part, 1)
    else:
        Passed[part] = 0
        setColor(part, 0)
    

    return reply   #回傳AI的回覆

def setColor(part, state):
    if part == 1:
        one = gr.Tab(label="壹、環境")
    return 0
    



with gr.Blocks(title="報告檢核系統") as demo:
    
    gr.Markdown("請依序輸入要檢核的段落")
    
    one = gr.Tab(label="壹、環境")
    two = gr.Tab(label="貳、演算方法與模型架構")
    
    with one:
        input = gr.Textbox(max_lines=7, lines=7, label="請說明使用的作業系統、語言、套件(函式庫)、預訓練模型、額外資料集等。如使用預訓練模型及額外資料集，請逐一列出來源。(200~600字)")
        check_btn = gr.Button("Check")
        part = gr.Slider(1, 8, value=1, visible = False)
        output = gr.Textbox(label="段落檢核結果")
        check_btn.click(fn=check, inputs=[input,part], outputs=output)
        
        
        
    with two:
        input = gr.Textbox(max_lines=7, lines=7, label="說明演算法設計、模型架構與模型參數，包括可能使用的特殊處理方式。(400~1200字)")
        check_btn = gr.Button("Check")
        part = gr.Slider(1, 8, value=2, visible = False)
        output = gr.Textbox(label="段落檢核結果")
        check_btn.click(fn=check, inputs=[input,part], outputs=output)
        
    
    
        
demo.launch()