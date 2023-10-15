# import gradio as gr

# with gr.Blocks() as demo:

    # turn = gr.Textbox(1, interactive=False, label="Turn")
    # board = gr.Dataframe(value=[""] , interactive=False, type="array",headers=["name", "age", "gender"],row_count=5,)

    # def place(board, turn, evt: gr.SelectData):
    #     if evt.value:
    #         return board, turn
    #     board[evt.index[0]][evt.index[1]] = turn
    #     turn=1
    #     return board, turn

    # board.select(place, [board, turn], [board, turn])

# if __name__ == "__main__":
#     demo.launch()
import gradio as gr

def update_label():
    return "1"

# 创建一个按钮元素
button = gr.Button("Click me!")

# 创建一个标签元素，初始值为空字符串
label = gr.Label("")

# 当按钮被点击时，调用update_label函数，将返回的值显示在标签上
button.click(update_label, outputs=label)

# 将按钮和标签放入Gradio界面中
interface = gr.Interface(fn=None, inputs=button, outputs=label, live=True)

if __name__ == "__main__":
    interface.launch()