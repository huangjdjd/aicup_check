# import gradio as gr
# def welcome(name):
#     return f"Welcome to Gradio, {name}!"
# with gr.Blocks() as demo:
#     gr.Markdown(
#     """
#     # Hello World!
#     Start typing below to see the output.
#     """)
#     inp = gr.Textbox(placeholder="What is your name?")
#     out = gr.Textbox()
#     #設定change事件
#     inp.change(fn = welcome, inputs = inp, outputs = out)
# demo.launch()
import gradio as gr
def greet(name):
    return "Hello " + name + "!"
with gr.Blocks() as demo:
    name = gr.Textbox(label="Name")
    # 不可互動
    # output = gr.Textbox(label="Output Box")
    # 可互動
    output = gr.Textbox(label="Output", interactive=True)
    greet_btn = gr.Button("Greet")
    greet_btn.click(fn=greet, inputs=name, outputs=output)
demo.launch()