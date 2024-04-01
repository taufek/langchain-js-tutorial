import { OpenAI, ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const process = async () => {
  const openAIKey = document.querySelector('#openai_key').value;
  const userPrompt = document.querySelector('#prompt').value;

  const chatModel = new ChatOpenAI({
    openAIApiKey: openAIKey,
  });

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class technical documentation writer."],
    ["user", "{input}"],
  ]);

  const chain = prompt.pipe(chatModel);

  const message = await chain.invoke({
    input: userPrompt,
  });

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${message.content}
  </div>
  `
}
