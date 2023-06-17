# PromptGPT

An efficient and easy-to-use prompt generator for LLMs.

## Usage

```bash
npm run dev
```

## Inspiration
Crafting effective prompts for ChatGPT has long been a challenge faced by users. Users often find themselves frustrated when attempting to achieve the desired text output from chatGPT, which even led to a community of users attempting to find the best prompt for one-shot answers. This inspires us to create PromptGPT in order to help the user find that desired output.

## What it does
Imagine a content creator who needs assistance generating engaging article ideas. Instead of brainstorming and refining prompts through trial and error, PromptGPT allows them to input a single sentence and receive a prompt-engineered best practice suggestion for one-shot result. This enables the creator to save time and focus on crafting high-quality content with one simple instruction. 
PromptGPT can be used as a [browser extension](https://github.com/arihanv/PromptGPT-Ext) and can be access at in the website with OpenAI prompt to test out at \*Redacted for judges access only\*

## How we built it
 1. We create a [custom dataset](https://github.com/DanNguyenN/PromptGPT/blob/main/training/our_team_created_prompt_dolly_instruction_style.csv) with 50 rows of data using [Expert Prompt Creator](https://chat.openai.com/share/7a039fb0-a87f-4f51-9e35-2e0a7a2584c4)

 2. We used [Hugging Face dataset](https://huggingface.co/datasets/fka/awesome-chatgpt-prompts) and web scrape [EasyPrompt Library](https://library.easyprompt.xyz/)

 3. Using datasets created in step 1 and step 2, we instruction-tuned the  [databricks/dolly-v2-3b](https://huggingface.co/databricks/dolly-v2-3b) model using the PEFT library to have the training in 4 bits in LORA on a single Nvidia Tesla A100 40 GB in 15 minutes. You can access the training notebook here: 

 4. We then serve the model in Google Cloud Vertex AI on one Nvidia Tesla T4 GPU for public inference(can only serve one request at a time)

 5. Finally, we create a FastAPI server to handle inference request

 6. The model can now be accessed through our [browser extension](https://github.com/arihanv/PromptGPT-Ext) or on our website \*Redacted for judges access only\*

## Challenges we ran into
- Budgets concern, we are currently running this project on Google Cloud with a $300 free trial credits, we can’t afford to spend money keeping it up so only one Nvidia Tesla T4 GPU is running, which mean only one person can use it. We attempted to create a queue system to address the issue but wasn’t able to. So the front-end user have to keep sending request until it able to process.

- The model sometime will give the answer to the question instead of new prompts if the question closely aligned to the Dolly’s original dataset:[databricks/databricks-dolly-15k](https://huggingface.co/datasets/databricks/databricks-dolly-15k) 

- All of our personal computer do not have GPU(consumer or enterprise), therefore we have to build a Docker container everytime for minor fix and deploy it to the cloud

- Was not able to use deepseed which will give the most optimal batch size

- Was not able to effectively evaluate due to time concerns.

## Accomplishments that we're proud of

- The whole project from end-to-end with the model working in GCP's Vertex AI to serving it to the front-end users. This is a big accomplishments for us undergraduate college students from North Texas.

- Learning how to finetune and deploy dolly v2 using Google Collab and Vertex AI workbench.

## What we learned
- LoRa and reducing the training model parameters

- Efficient GPU Usage

- Decoder Only LLM

- That batch size can have a huge effect on the performance of the model. I was training the model with a batch size of 32 and 8. However, the 8 batch size train model get the same result

- Serving the model on Vertex AI

- Learned how CUDA architecture work and how to set an environment for LLM to run on

- Building an extension using Next.js

## What's next for PromptGPT
- Replace the base model with RWKV(Receptance Weighted Key Value) to have a large model to learn more context while making allow faster training and inference. 

- Creating a Database(either Databricks' Lakehouse or MongoDB) to store the user prompt and its' revised PromptGPT’s output prompt in order so we can implement Reinforcement Learning with Human Feedback in the future.

## Repo
- Front-end: [https://github.com/arihanv/PromptGPT](https://github.com/arihanv/PromptGPT)

- Front-end Extension: [https://github.com/arihanv/PromptGPT-Ext](https://github.com/arihanv/PromptGPT-Ext)
- Google Colab Inferencing (Run all cells for a gradio cell): https://colab.research.google.com/drive/1fjKvM7X2oZc84I6dy-8_U_a3cRJNl5R9?usp=sharing

- Back-end and training code: https://github.com/DanNguyenN/PromptGPT
- Google Colab Training: https://colab.research.google.com/drive/1WeQWqUzcT7U3TYxTjdR9IJ2vpCg3YQ1F?usp=sharing
