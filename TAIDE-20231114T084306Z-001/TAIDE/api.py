#!/usr/bin/env python
import requests

# For local streaming, the websockets are hosted without ssl - http://
HOST = 'localhost:5000'
URI = f'http://{HOST}/api/v1/generate'

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


if __name__ == '__main__':
    examples = [
      #"能告訴我如何申請自有雲服務嗎？",
      "請問如何申請自有雲服務？",
      "Eduroam驗證服務是指什麼呢？",
    ]
    for exam in examples:
      prompt = f"""<bos>Human
{exam}<eos>
<bos>Assistant"""
      print(f"{bcolors.OKBLUE}Prompt:{bcolors.HEADER} {exam}{bcolors.ENDC}")
      result = run(prompt)
      response = result['results'][0]['text']
      print(f"{bcolors.OKBLUE}Result:{bcolors.HEADER} {response}{bcolors.ENDC}")
      print(f'--'*20)