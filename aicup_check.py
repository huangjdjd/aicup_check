import openai
import gradio as gr

openai.api_key = "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"

#檢查用的function，input_text為要檢核的段落內容；part為第幾段
#關鍵字: 檢核通過  (如果AI回覆為通過，則務必請AI在reply中加入繁體 "檢核通過" 以方便判定)
def check(input_text, part):  
    reply = "adasdasds檢核通過"
    
    return reply   #回傳AI的回覆


#標註已通過(綠)/未通過(紅)的段落

            
            

with gr.Blocks() as demo:
    
    
    gr.Markdown("請依序輸入要檢核的段落")
    one = gr.Tab("壹、環境")
    two = gr.Tab("貳、演算方法與模型架構")
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