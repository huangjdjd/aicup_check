#!/usr/bin/env python
import asyncio
import json
import sys


try:
    import websockets
except ImportError:
    print("Websockets package not found. Make sure it's installed.")

# For local streaming, the websockets are hosted without ssl - ws://
HOST = '203.145.216.157:60000'
URI = f'ws://{HOST}/api/v1/stream'

# For reverse-proxied streaming, the remote will likely host with ssl - wss://
# URI = 'wss://your-uri-here.trycloudflare.com/api/v1/stream'


async def run(context):
    # Note: the selected defaults change from time to time.
    request = {
        'prompt': context,
        'max_new_tokens': 250,
        'auto_max_new_tokens': False,
        'max_tokens_second': 0,

        # Generation params. If 'preset' is set to different than 'None', the values
        # in presets/preset-name.yaml are used instead of the individual numbers.
        'preset': 'None',
        'do_sample': True,
        'temperature': 0.7,
        'top_p': 0.1,
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

    async with websockets.connect(URI, ping_interval=None) as websocket:
        await websocket.send(json.dumps(request))

        yield context  # Remove this if you just want to see the reply

        while True:
            incoming_data = await websocket.recv()
            incoming_data = json.loads(incoming_data)

            match incoming_data['event']:
                case 'text_stream':
                    yield incoming_data['text']
                case 'stream_end':
                    return


async def print_response_stream(prompt):
    async for response in run(prompt):
        print(response, end='')
        sys.stdout.flush()  # If we don't flush, we won't see tokens in realtime.


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
input_text = """
壹、環境
一、 作業系統:Windows 10
二、 程式語言:Python
三、 套件/函式庫 (僅列出重要部分)
1. PyTorch: 主要使用的深度學習框架
2. TorchVision: 用於影像類資料前處理
3. Tensorboard: 用以記錄訓練結果
4. TensorFlow: 為符合 TrackNetV2 需求而安裝
5. Keras: 為符合 TrackNetV2 需求而安裝
6. scikit-learn
7. scipy
8. Numpy
9. Pandas
10. OpenCV
11. Pillow
12. ffmpegcv
13. imageio
14. MMDetection: 物件辨識之框架
15. MMPose: 人體姿勢偵測之框架
16. mmcv-full: MM 系列的依存套件
17. mmengine: 同上,MM 系列的依存套件
18. tqdm
四、 預訓練模型
1. TrackNetV2: 用於偵測羽球位置之模型
來源: https://nol.cs.nctu.edu.tw:234/open-source/TrackNetv2
2. Faster RCNN: 用於偵測人體之模型

來源: https://github.com/open-
mmlab/mmdetection/tree/main/configs/faster_rcnn

3. HRNet: 用於偵測人體關鍵點之模型

來源: https://github.com/open-
mmlab/mmpose/tree/main/configs/wholebody_2d_keypoint/topdown_he

atmap/coco-wholebody"""



if __name__ == '__main__':
    from argparse import ArgumentParser
    parser = ArgumentParser(prog='General debug things')
    parser.add_argument('--msg', type=str)
    args = parser.parse_args()

    # prompt = args.msg
    
    prompt = '''用中文回答我的問題。等一下將會輸入一些條件與一個段落，請你幫我檢測輸入的段落有沒有符合條件。 
輸入的格式為：條件  +  段落（條件與段落中間以“+”分隔）。 
如果該段落符合條件，請回覆「檢核通過」這四個字， 如果沒有通過，請回覆「檢核未通過」 
輸入開始: \n  ''' + condition[1] + "\n+\n" + input_text + "輸入結束"
    #prompt = "解釋資料結構"
    template = f"""<bos>Human
{prompt}<eos>
<bos>Assistant"""
    # prompt = "In order to make homemade bread, follow these steps:\n1)"
    asyncio.run(print_response_stream(template))
    
    
    
