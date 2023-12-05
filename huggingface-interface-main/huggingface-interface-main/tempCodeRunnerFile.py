            match incoming_data['event']:
                case 'text_stream':
                    # print(outputs)
                    outputs.append(incoming_data['text'])
                    yield "".join(outputs)
                case 'stream_end':
                    conversations.append({
                        'role': 'assistant',
                        'content': "".join(outputs),
                    })
                    print(conversations)
                    return