// @ts-check

/**
 * This is a simple example of how you can import
 * the ollama sdk and work with that
 * import ollama from "https://esm.sh/ollama/browser"
 * add the code below to your buttons click event listener
 * const respone = await ollama.chat({messages: [{role: 'user', content: 'What is the capital of the United States?'}]});
 * console.log(response);
 */
// ----------------------------
/**
 * There might be another way. The platform val.town
 * allows free requests to openai api. https://www.val.town/v/std/openai
 * Limits are:
 * - Usage Quota: We limit each user to 10 requests per minute.
 * - Features: Chat completions is the only endpoint available.
 * - There is no streaming support
 *
 * This might be enough for our usecase.
 * Do make this easier @ff6347 wrote this simple wrapper class
 * that you can use to interact with val.town openai api
 * mimicing the ollama sdk.
 * It is an esm module so you need to include type="module" in your script tag
 * <script type="module" src="index.js"></script>
 */

// import the wrapper class
import { LLM } from './llm.js';

// create an instance of the class
// you need to insert the run url for your val.town openai api
// @ff6347 will instruct you on how to get this

const llm = new LLM({
  host: 'https://skip69cont-openai_api.web.val.run/',
});

// get the button#run element from the index.html
const chatButton = document.getElementById('run');

// add a click event listener to the button that runs the async function
chatButton.addEventListener('click', async () => {
  // some options for the chat
  const format = 'json'; // we want json output
  // we set the seed so we get always the same output
  // we set the temperature which controls the creativity of the model
  const options = {
    seed: 42,
    temperature: 1.2,
  };
  // the messages that we want to send to the model
  // allowed are 'system', 'assistant' and 'user' role for the messages
  const messages = [
    {
      role: 'system',
      content:
      `
      You are a SVG generator, you only answer in SVG code. NO markdown. NO backticks. only the svg xml. Black is only apear in the same areas as #D9D9D9. The generated code will be used as real svg.
        This is the SVG code for a HOUSE everything between three quotes is the example code:
    """
    <svg width="1088" height="699" viewBox="0 0 1088 699" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1088" height="699" fill="#1E1E1E"/>
    <rect y="499" width="1088" height="200" fill="#D9D9D9"/>
    <rect x="146" y="393" width="796" height="100" fill="#D9D9D9"/>
    <path d="M291 287H796V387H291V287Z" fill="#D9D9D9"/>
    <rect y="193" width="100" height="300" fill="#D9D9D9"/>
    <rect x="987" y="193" width="100" height="300" fill="#D9D9D9"/>
    <rect x="842" y="287" width="100" height="100" fill="#D9D9D9"/>
    <rect x="493" y="81" width="100" height="200" fill="#D9D9D9"/>
    <rect x="145" y="287" width="100" height="100" fill="#D9D9D9"/>
    <rect x="695" y="181" width="100" height="100" fill="#D9D9D9"/>
    <path d="M290 181H390V281H290V181Z" fill="#D9D9D9"/>
    <path d="M50 112L93.3013 187H6.69873L50 112Z" fill="#D9D9D9"/>
    <path d="M1037 112L1080.3 187H993.699L1037 112Z" fill="#D9D9D9"/>
    <path d="M892 206L935.301 281H848.699L892 206Z" fill="#D9D9D9"/>
    <path d="M745 100L788.301 175H701.699L745 100Z" fill="#D9D9D9"/>
    <path d="M543 0L586.301 75H499.699L543 0Z" fill="#D9D9D9"/>
    <path d="M340 100L383.301 175H296.699L340 100Z" fill="#D9D9D9"/>
    <path d="M195 206L238.301 281H151.699L195 206Z" fill="#D9D9D9"/>
    <rect x="164" y="418" width="31" height="49" fill="black"/>
    <rect x="214" y="418" width="31" height="49" fill="black"/>
    <rect x="364" y="418" width="31" height="49" fill="black"/>
    <rect x="264" y="418" width="31" height="49" fill="black"/>
    <rect x="314" y="418" width="31" height="49" fill="black"/>
    <rect x="708" y="206" width="31" height="49" fill="black"/>
    <rect x="664" y="418" width="31" height="49" fill="black"/>
    <rect x="714" y="418" width="31" height="49" fill="black"/>
    <rect x="864" y="418" width="31" height="49" fill="black"/>
    <rect x="764" y="418" width="31" height="49" fill="black"/>
    <rect x="814" y="418" width="31" height="49" fill="black"/>
    <rect x="198" y="318" width="31" height="49" fill="black"/>
    <rect x="298" y="318" width="31" height="49" fill="black"/>
    <rect x="698" y="318" width="31" height="49" fill="black"/>
    <rect x="748" y="318" width="31" height="49" fill="black"/>
    <rect x="299" y="207" width="31" height="49" fill="black"/>
    <rect x="349" y="207" width="31" height="49" fill="black"/>
    <rect x="898" y="318" width="31" height="49" fill="black"/>
    <rect x="798" y="318" width="31" height="49" fill="black"/>
    <rect x="848" y="318" width="31" height="49" fill="black"/>
    <rect x="340" y="625" width="31" height="49" fill="black"/>
    <rect x="390" y="625" width="31" height="49" fill="black"/>
    <rect x="440" y="625" width="31" height="49" fill="black"/>
    <rect x="840" y="625" width="31" height="49" fill="black"/>
    <rect x="890" y="625" width="31" height="49" fill="black"/>
    <rect x="1040" y="625" width="31" height="49" fill="black"/>
    <rect x="940" y="625" width="31" height="49" fill="black"/>
    <rect x="990" y="625" width="31" height="49" fill="black"/>
    <rect x="24" y="524" width="31" height="49" fill="black"/>
    <rect x="74" y="524" width="31" height="49" fill="black"/>
    <rect x="124" y="524" width="31" height="49" fill="black"/>
    <rect x="524" y="524" width="31" height="49" fill="black"/>
    <rect x="574" y="524" width="31" height="49" fill="black"/>
    <rect x="724" y="524" width="31" height="49" fill="black"/>
    <rect x="624" y="524" width="31" height="49" fill="black"/>
    <rect x="674" y="524" width="31" height="49" fill="black"/>
    <rect x="414" y="418" width="31" height="49" fill="black"/>
    <rect x="464" y="418" width="31" height="49" fill="black"/>
    <rect x="614" y="418" width="31" height="49" fill="black"/>
    <rect x="514" y="418" width="31" height="49" fill="black"/>
    <rect x="564" y="418" width="31" height="49" fill="black"/>
    <rect x="534" y="207" width="31" height="49" fill="black"/>
    <rect x="524" y="101" width="31" height="49" fill="black"/>
    <rect x="1045" y="437" width="31" height="49" fill="black"/>
    <rect x="1035" y="331" width="31" height="49" fill="black"/>
    <rect x="24" y="316" width="31" height="49" fill="black"/>
    <rect x="14" y="210" width="31" height="49" fill="black"/>
    </svg>

    """
       `
        
    },
    {
      role: 'assistant',
       content: 
    `     
    
    <svg width="1088" height="699" viewBox="0 0 1088 699" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1088" height="699" fill="#1E1E1E"/>
    <rect y="499" width="1088" height="200" fill="#D9D9D9"/>
    <rect x="146" y="393" width="796" height="100" fill="#D9D9D9"/>
    <path d="M291 287H796V387H291V287Z" fill="#D9D9D9"/>
    <rect y="193" width="100" height="300" fill="#D9D9D9"/>
    <rect x="987" y="193" width="100" height="300" fill="#D9D9D9"/>
    <rect x="842" y="287" width="100" height="100" fill="#D9D9D9"/>
    <rect x="493" y="81" width="100" height="200" fill="#D9D9D9"/>
    <rect x="145" y="287" width="100" height="100" fill="#D9D9D9"/>
    <rect x="695" y="181" width="100" height="100" fill="#D9D9D9"/>
    <path d="M290 181H390V281H290V181Z" fill="#D9D9D9"/>
    <path d="M50 112L93.3013 187H6.69873L50 112Z" fill="#D9D9D9"/>
    <path d="M1037 112L1080.3 187H993.699L1037 112Z" fill="#D9D9D9"/>
    <path d="M892 206L935.301 281H848.699L892 206Z" fill="#D9D9D9"/>
    <path d="M745 100L788.301 175H701.699L745 100Z" fill="#D9D9D9"/>
    <path d="M543 0L586.301 75H499.699L543 0Z" fill="#D9D9D9"/>
    <path d="M340 100L383.301 175H296.699L340 100Z" fill="#D9D9D9"/>
    <path d="M195 206L238.301 281H151.699L195 206Z" fill="#D9D9D9"/>
    <rect x="164" y="418" width="31" height="49" fill="black"/>
    <rect x="214" y="418" width="31" height="49" fill="black"/>
    <rect x="364" y="418" width="31" height="49" fill="black"/>
    <rect x="264" y="418" width="31" height="49" fill="black"/>
    <rect x="314" y="418" width="31" height="49" fill="black"/>
    <rect x="708" y="206" width="31" height="49" fill="black"/>
    <rect x="664" y="418" width="31" height="49" fill="black"/>
    <rect x="714" y="418" width="31" height="49" fill="black"/>
    <rect x="864" y="418" width="31" height="49" fill="black"/>
    <rect x="764" y="418" width="31" height="49" fill="black"/>
    <rect x="814" y="418" width="31" height="49" fill="black"/>
    <rect x="198" y="318" width="31" height="49" fill="black"/>
    <rect x="298" y="318" width="31" height="49" fill="black"/>
    <rect x="698" y="318" width="31" height="49" fill="black"/>
    <rect x="748" y="318" width="31" height="49" fill="black"/>
    <rect x="299" y="207" width="31" height="49" fill="black"/>
    <rect x="349" y="207" width="31" height="49" fill="black"/>
    <rect x="898" y="318" width="31" height="49" fill="black"/>
    <rect x="798" y="318" width="31" height="49" fill="black"/>
    <rect x="848" y="318" width="31" height="49" fill="black"/>
    <rect x="340" y="625" width="31" height="49" fill="black"/>
    <rect x="390" y="625" width="31" height="49" fill="black"/>
    <rect x="440" y="625" width="31" height="49" fill="black"/>
    <rect x="840" y="625" width="31" height="49" fill="black"/>
    <rect x="890" y="625" width="31" height="49" fill="black"/>
    <rect x="1040" y="625" width="31" height="49" fill="black"/>
    <rect x="940" y="625" width="31" height="49" fill="black"/>
    <rect x="990" y="625" width="31" height="49" fill="black"/>
    <rect x="24" y="524" width="31" height="49" fill="black"/>
    <rect x="74" y="524" width="31" height="49" fill="black"/>
    <rect x="124" y="524" width="31" height="49" fill="black"/>
    <rect x="524" y="524" width="31" height="49" fill="black"/>
    <rect x="574" y="524" width="31" height="49" fill="black"/>
    <rect x="724" y="524" width="31" height="49" fill="black"/>
    <rect x="624" y="524" width="31" height="49" fill="black"/>
    <rect x="674" y="524" width="31" height="49" fill="black"/>
    <rect x="414" y="418" width="31" height="49" fill="black"/>
    <rect x="464" y="418" width="31" height="49" fill="black"/>
    <rect x="614" y="418" width="31" height="49" fill="black"/>
    <rect x="514" y="418" width="31" height="49" fill="black"/>
    <rect x="564" y="418" width="31" height="49" fill="black"/>
    <rect x="534" y="207" width="31" height="49" fill="black"/>
    <rect x="524" y="101" width="31" height="49" fill="black"/>
    <rect x="1045" y="437" width="31" height="49" fill="black"/>
    <rect x="1035" y="331" width="31" height="49" fill="black"/>
    <rect x="24" y="316" width="31" height="49" fill="black"/>
    <rect x="14" y="210" width="31" height="49" fill="black"/>
    </svg>  
    
       `,
       
    },
    {
      role: 'assistant',
       content: 
    `     
    
    <svg width="1014" height="684" viewBox="0 0 1014 684" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1014" height="684" fill="#1E1E1E"/>
<rect x="207" y="482" width="600" height="200" fill="#D9D9D9"/>
<rect x="814" y="682" width="600" height="200" transform="rotate(-90 814 682)" fill="#D9D9D9"/>
<path d="M0 682L0 82H200L200 682H0Z" fill="#D9D9D9"/>
<path d="M407 275H607V475H407V275Z" fill="#D9D9D9"/>
<path d="M100 0L186.603 75H13.3975L100 0Z" fill="#D9D9D9"/>
<path d="M914 0L1000.6 75H827.397L914 0Z" fill="#D9D9D9"/>
<path d="M507 194L593.603 269H420.397L507 194Z" fill="#D9D9D9"/>
<path d="M307 399L393.603 474H220.397L307 399Z" fill="#D9D9D9"/>
<path d="M707 399L793.603 474H620.397L707 399Z" fill="#D9D9D9"/>
<rect x="17" y="115" width="32" height="53" fill="black"/>
<rect x="68" y="115" width="32" height="53" fill="black"/>
<rect x="43" y="191" width="32" height="53" fill="black"/>
<rect x="51" y="334" width="32" height="53" fill="black"/>
<rect x="26" y="410" width="32" height="53" fill="black"/>
<rect x="94" y="191" width="32" height="53" fill="black"/>
<rect x="17" y="259" width="32" height="53" fill="black"/>
<rect x="68" y="259" width="32" height="53" fill="black"/>
<rect x="102" y="334" width="32" height="53" fill="black"/>
<rect x="85" y="555" width="32" height="53" fill="black"/>
<rect x="144" y="410" width="32" height="53" fill="black"/>
<rect x="257" y="517" width="32" height="53" fill="black"/>
<rect x="232" y="593" width="32" height="53" fill="black"/>
<rect x="308" y="517" width="32" height="53" fill="black"/>
<rect x="350" y="593" width="32" height="53" fill="black"/>
<rect x="431" y="297" width="32" height="53" fill="black"/>
<rect x="431" y="373" width="32" height="53" fill="black"/>
<rect x="515" y="297" width="32" height="53" fill="black"/>
<rect x="515" y="373" width="32" height="53" fill="black"/>
<rect x="59" y="479" width="32" height="53" fill="black"/>
<rect x="110" y="479" width="32" height="53" fill="black"/>
<rect x="136" y="555" width="32" height="53" fill="black"/>
<rect x="282" y="593" width="32" height="53" fill="black"/>
<rect x="454" y="555" width="32" height="53" fill="black"/>
<rect x="429" y="631" width="32" height="53" fill="black"/>
<rect x="505" y="555" width="32" height="53" fill="black"/>
<rect x="547" y="631" width="32" height="53" fill="black"/>
<rect x="256" y="517" width="32" height="53" fill="black"/>
<rect x="307" y="517" width="32" height="53" fill="black"/>
<rect x="333" y="593" width="32" height="53" fill="black"/>
<rect x="590" y="593" width="32" height="53" fill="black"/>
<rect x="692" y="517" width="32" height="53" fill="black"/>
<rect x="692" y="593" width="32" height="53" fill="black"/>
<rect x="743" y="517" width="32" height="53" fill="black"/>
<rect x="743" y="593" width="32" height="53" fill="black"/>
<rect x="590" y="517" width="32" height="53" fill="black"/>
<rect x="641" y="517" width="32" height="53" fill="black"/>
<rect x="641" y="593" width="32" height="53" fill="black"/>
<rect x="826" y="115" width="32" height="53" fill="black"/>
<rect x="877" y="115" width="32" height="53" fill="black"/>
<rect x="852" y="191" width="32" height="53" fill="black"/>
<rect x="852" y="335" width="32" height="53" fill="black"/>
<rect x="827" y="411" width="32" height="53" fill="black"/>
<rect x="903" y="191" width="32" height="53" fill="black"/>
<rect x="826" y="259" width="32" height="53" fill="black"/>
<rect x="877" y="259" width="32" height="53" fill="black"/>
<rect x="903" y="335" width="32" height="53" fill="black"/>
<rect x="894" y="555" width="32" height="53" fill="black"/>
<rect x="945" y="411" width="32" height="53" fill="black"/>
<rect x="868" y="479" width="32" height="53" fill="black"/>
<rect x="919" y="479" width="32" height="53" fill="black"/>
<rect x="945" y="555" width="32" height="53" fill="black"/>
</svg>

    
       `,
       
    },
    {
      role: 'assistant',
       content: 
    `     
    
    <svg width="1024" height="689" viewBox="0 0 1024 689" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="689" fill="#1E1E1E"/>
    <rect x="224" y="489" width="768" height="200" fill="#D9D9D9"/>
    <rect x="32" y="82" width="186" height="607" fill="#D9D9D9"/>
    <rect x="609" y="284" width="383" height="200" fill="#D9D9D9"/>
    <path d="M125 0L205.54 75H44.4596L125 0Z" fill="#D9D9D9"/>
    <path d="M806 204L977.473 279H634.527L806 204Z" fill="#D9D9D9"/>
    <path d="M413 409L599.195 484H226.805L413 409Z" fill="#D9D9D9"/>
    <rect y="166" width="27" height="57" fill="#D9D9D9"/>
    <rect x="241" y="520" width="27" height="47" fill="black"/>
    <rect x="241" y="520" width="27" height="47" fill="black"/>
    <rect x="241" y="520" width="27" height="47" fill="black"/>
    <rect x="291" y="520" width="27" height="47" fill="black"/>
    <rect x="291" y="520" width="27" height="47" fill="black"/>
    <rect x="291" y="520" width="27" height="47" fill="black"/>
    <rect x="336" y="520" width="27" height="47" fill="black"/>
    <rect x="336" y="520" width="27" height="47" fill="black"/>
    <rect x="336" y="520" width="27" height="47" fill="black"/>
    <rect x="386" y="520" width="27" height="47" fill="black"/>
    <rect x="386" y="520" width="27" height="47" fill="black"/>
    <rect x="386" y="520" width="27" height="47" fill="black"/>
    <rect x="400" y="427" width="27" height="47" fill="black"/>
    <rect x="400" y="427" width="27" height="47" fill="black"/>
    <rect x="400" y="427" width="27" height="47" fill="black"/>
    <rect x="792" y="223" width="27" height="47" fill="black"/>
    <rect x="792" y="223" width="27" height="47" fill="black"/>
    <rect x="792" y="223" width="27" height="47" fill="black"/>
    <rect x="531" y="520" width="27" height="47" fill="black"/>
    <rect x="531" y="520" width="27" height="47" fill="black"/>
    <rect x="531" y="520" width="27" height="47" fill="black"/>
    <rect x="581" y="520" width="27" height="47" fill="black"/>
    <rect x="581" y="520" width="27" height="47" fill="black"/>
    <rect x="581" y="520" width="27" height="47" fill="black"/>
    <rect x="726" y="520" width="27" height="47" fill="black"/>
    <rect x="726" y="520" width="27" height="47" fill="black"/>
    <rect x="726" y="520" width="27" height="47" fill="black"/>
    <rect x="386" y="603" width="27" height="47" fill="black"/>
    <rect x="386" y="603" width="27" height="47" fill="black"/>
    <rect x="386" y="603" width="27" height="47" fill="black"/>
    <rect x="436" y="603" width="27" height="47" fill="black"/>
    <rect x="436" y="603" width="27" height="47" fill="black"/>
    <rect x="436" y="603" width="27" height="47" fill="black"/>
    <rect x="531" y="603" width="27" height="47" fill="black"/>
    <rect x="531" y="603" width="27" height="47" fill="black"/>
    <rect x="531" y="603" width="27" height="47" fill="black"/>
    <rect x="156" y="489" width="27" height="47" fill="black"/>
    <rect x="156" y="489" width="27" height="47" fill="black"/>
    <rect x="156" y="489" width="27" height="47" fill="black"/>
    <rect x="61" y="572" width="27" height="47" fill="black"/>
    <rect x="61" y="572" width="27" height="47" fill="black"/>
    <rect x="61" y="572" width="27" height="47" fill="black"/>
    <rect x="156" y="572" width="27" height="47" fill="black"/>
    <rect x="156" y="572" width="27" height="47" fill="black"/>
    <rect x="156" y="572" width="27" height="47" fill="black"/>
    <rect x="676" y="603" width="27" height="47" fill="black"/>
    <rect x="676" y="603" width="27" height="47" fill="black"/>
    <rect x="676" y="603" width="27" height="47" fill="black"/>
    <rect x="726" y="603" width="27" height="47" fill="black"/>
    <rect x="726" y="603" width="27" height="47" fill="black"/>
    <rect x="726" y="603" width="27" height="47" fill="black"/>
    <rect x="871" y="603" width="27" height="47" fill="black"/>
    <rect x="871" y="603" width="27" height="47" fill="black"/>
    <rect x="871" y="603" width="27" height="47" fill="black"/>
    <rect x="776" y="520" width="27" height="47" fill="black"/>
    <rect x="776" y="520" width="27" height="47" fill="black"/>
    <rect x="776" y="520" width="27" height="47" fill="black"/>
    <rect x="905" y="315" width="27" height="47" fill="black"/>
    <rect x="905" y="315" width="27" height="47" fill="black"/>
    <rect x="905" y="315" width="27" height="47" fill="black"/>
    <rect x="855" y="398" width="27" height="47" fill="black"/>
    <rect x="855" y="398" width="27" height="47" fill="black"/>
    <rect x="855" y="398" width="27" height="47" fill="black"/>
    <rect x="955" y="315" width="27" height="47" fill="black"/>
    <rect x="955" y="315" width="27" height="47" fill="black"/>
    <rect x="955" y="315" width="27" height="47" fill="black"/>
    <rect x="921" y="520" width="27" height="47" fill="black"/>
    <rect x="921" y="520" width="27" height="47" fill="black"/>
    <rect x="921" y="520" width="27" height="47" fill="black"/>
    <rect x="626" y="520" width="27" height="47" fill="black"/>
    <rect x="626" y="520" width="27" height="47" fill="black"/>
    <rect x="626" y="520" width="27" height="47" fill="black"/>
    <rect x="633" y="315" width="27" height="47" fill="black"/>
    <rect x="633" y="315" width="27" height="47" fill="black"/>
    <rect x="633" y="315" width="27" height="47" fill="black"/>
    <rect x="828" y="315" width="27" height="47" fill="black"/>
    <rect x="828" y="315" width="27" height="47" fill="black"/>
    <rect x="828" y="315" width="27" height="47" fill="black"/>
    <rect x="633" y="398" width="27" height="47" fill="black"/>
    <rect x="633" y="398" width="27" height="47" fill="black"/>
    <rect x="633" y="398" width="27" height="47" fill="black"/>
    <rect x="778" y="398" width="27" height="47" fill="black"/>
    <rect x="778" y="398" width="27" height="47" fill="black"/>
    <rect x="778" y="398" width="27" height="47" fill="black"/>
    <rect x="728" y="315" width="27" height="47" fill="black"/>
    <rect x="728" y="315" width="27" height="47" fill="black"/>
    <rect x="728" y="315" width="27" height="47" fill="black"/>
    <rect x="676" y="520" width="27" height="47" fill="black"/>
    <rect x="676" y="520" width="27" height="47" fill="black"/>
    <rect x="676" y="520" width="27" height="47" fill="black"/>
    <rect x="69" y="388" width="27" height="47" fill="black"/>
    <rect x="69" y="388" width="27" height="47" fill="black"/>
    <rect x="69" y="388" width="27" height="47" fill="black"/>
    <rect x="119" y="388" width="27" height="47" fill="black"/>
    <rect x="119" y="388" width="27" height="47" fill="black"/>
    <rect x="119" y="388" width="27" height="47" fill="black"/>
    <rect x="169" y="305" width="27" height="47" fill="black"/>
    <rect x="169" y="305" width="27" height="47" fill="black"/>
    <rect x="169" y="305" width="27" height="47" fill="black"/>
    <rect x="171" y="183" width="27" height="47" fill="black"/>
    <rect x="171" y="183" width="27" height="47" fill="black"/>
    <rect x="171" y="183" width="27" height="47" fill="black"/>
    <rect x="121" y="100" width="27" height="47" fill="black"/>
    <rect x="121" y="100" width="27" height="47" fill="black"/>
    <rect x="121" y="100" width="27" height="47" fill="black"/>
    <rect x="69" y="305" width="27" height="47" fill="black"/>
    <rect x="69" y="305" width="27" height="47" fill="black"/>
    <rect x="69" y="305" width="27" height="47" fill="black"/>
    <rect x="997" y="352" width="27" height="57" fill="#D9D9D9"/>
    <rect y="427" width="27" height="57" fill="#D9D9D9"/>
    </svg>
    
  
    
       `,
       
    },  	
    {
      role: 'assistant',
       content: 
    `  
    <svg width="1048" height="789" viewBox="0 0 1048 789" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1048" height="789" fill="#1E1E1E"/>
    <rect y="589" width="520" height="200" fill="#D9D9D9"/>
    <rect x="528" y="189" width="520" height="600" fill="#D9D9D9"/>
    <rect x="188" y="381" width="332" height="200" fill="#D9D9D9"/>
    <rect x="948" y="82" width="100" height="100" fill="#D9D9D9"/>
    <rect x="738" y="82" width="100" height="100" fill="#D9D9D9"/>
    <rect x="1" y="481" width="100" height="100" fill="#D9D9D9"/>
    <rect x="420" y="273" width="100" height="100" fill="#D9D9D9"/>
    <rect x="188" y="273" width="100" height="100" fill="#D9D9D9"/>
    <path d="M50 400L93.3013 475H6.69873L50 400Z" fill="#D9D9D9"/>
    <path d="M238 189L281.301 264H194.699L238 189Z" fill="#D9D9D9"/>
    <path d="M998 0L1041.3 75H954.699L998 0Z" fill="#D9D9D9"/>
    <path d="M788 0L831.301 75H744.699L788 0Z" fill="#D9D9D9"/>
    <path d="M578 0L621.301 75H534.699L578 0Z" fill="#D9D9D9"/>
    <path d="M470 189L513.301 264H426.699L470 189Z" fill="#D9D9D9"/>
    <rect x="532" y="83" width="100" height="100" fill="#D9D9D9"/>
    <rect x="540" y="224" width="16" height="30" fill="black"/>
    <rect x="540" y="224" width="16" height="30" fill="black"/>
    <rect x="571" y="224" width="16" height="30" fill="black"/>
    <rect x="571" y="224" width="16" height="30" fill="black"/>
    <rect x="552" y="478" width="16" height="30" fill="black"/>
    <rect x="552" y="478" width="16" height="30" fill="black"/>
    <rect x="637" y="224" width="16" height="30" fill="black"/>
    <rect x="637" y="224" width="16" height="30" fill="black"/>
    <rect x="668" y="224" width="16" height="30" fill="black"/>
    <rect x="668" y="224" width="16" height="30" fill="black"/>
    <rect x="699" y="224" width="16" height="30" fill="black"/>
    <rect x="699" y="224" width="16" height="30" fill="black"/>
    <rect x="847" y="224" width="16" height="30" fill="black"/>
    <rect x="847" y="224" width="16" height="30" fill="black"/>
    <rect x="878" y="224" width="16" height="30" fill="black"/>
    <rect x="878" y="224" width="16" height="30" fill="black"/>
    <rect x="909" y="224" width="16" height="30" fill="black"/>
    <rect x="909" y="224" width="16" height="30" fill="black"/>
    <rect x="944" y="224" width="16" height="30" fill="black"/>
    <rect x="944" y="224" width="16" height="30" fill="black"/>
    <rect x="975" y="224" width="16" height="30" fill="black"/>
    <rect x="975" y="224" width="16" height="30" fill="black"/>
    <rect x="1006" y="224" width="16" height="30" fill="black"/>
    <rect x="1006" y="224" width="16" height="30" fill="black"/>
    <rect x="618" y="550" width="16" height="30" fill="black"/>
    <rect x="618" y="550" width="16" height="30" fill="black"/>
    <rect x="699" y="296" width="16" height="30" fill="black"/>
    <rect x="699" y="296" width="16" height="30" fill="black"/>
    <rect x="680" y="550" width="16" height="30" fill="black"/>
    <rect x="680" y="550" width="16" height="30" fill="black"/>
    <rect x="765" y="296" width="16" height="30" fill="black"/>
    <rect x="765" y="296" width="16" height="30" fill="black"/>
    <rect x="796" y="296" width="16" height="30" fill="black"/>
    <rect x="796" y="296" width="16" height="30" fill="black"/>
    <rect x="827" y="296" width="16" height="30" fill="black"/>
    <rect x="827" y="296" width="16" height="30" fill="black"/>
    <rect x="855" y="631" width="16" height="30" fill="black"/>
    <rect x="855" y="631" width="16" height="30" fill="black"/>
    <rect x="886" y="631" width="16" height="30" fill="black"/>
    <rect x="886" y="631" width="16" height="30" fill="black"/>
    <rect x="726" y="631" width="16" height="30" fill="black"/>
    <rect x="726" y="631" width="16" height="30" fill="black"/>
    <rect x="952" y="631" width="16" height="30" fill="black"/>
    <rect x="952" y="631" width="16" height="30" fill="black"/>
    <rect x="792" y="631" width="16" height="30" fill="black"/>
    <rect x="792" y="631" width="16" height="30" fill="black"/>
    <rect x="1014" y="631" width="16" height="30" fill="black"/>
    <rect x="1014" y="631" width="16" height="30" fill="black"/>
    <rect x="676" y="703" width="16" height="30" fill="black"/>
    <rect x="676" y="703" width="16" height="30" fill="black"/>
    <rect x="707" y="703" width="16" height="30" fill="black"/>
    <rect x="707" y="703" width="16" height="30" fill="black"/>
    <rect x="738" y="703" width="16" height="30" fill="black"/>
    <rect x="738" y="703" width="16" height="30" fill="black"/>
    <rect x="582" y="703" width="16" height="30" fill="black"/>
    <rect x="582" y="703" width="16" height="30" fill="black"/>
    <rect x="804" y="703" width="16" height="30" fill="black"/>
    <rect x="804" y="703" width="16" height="30" fill="black"/>
    <rect x="835" y="703" width="16" height="30" fill="black"/>
    <rect x="835" y="703" width="16" height="30" fill="black"/>
    <rect x="570" y="293" width="16" height="30" fill="black"/>
    <rect x="570" y="293" width="16" height="30" fill="black"/>
    <rect x="601" y="293" width="16" height="30" fill="black"/>
    <rect x="601" y="293" width="16" height="30" fill="black"/>
    <rect x="300" y="534" width="16" height="30" fill="black"/>
    <rect x="300" y="534" width="16" height="30" fill="black"/>
    <rect x="362" y="534" width="16" height="30" fill="black"/>
    <rect x="362" y="534" width="16" height="30" fill="black"/>
    <rect x="397" y="534" width="16" height="30" fill="black"/>
    <rect x="397" y="534" width="16" height="30" fill="black"/>
    <rect x="428" y="534" width="16" height="30" fill="black"/>
    <rect x="428" y="534" width="16" height="30" fill="black"/>
    <rect x="202" y="531" width="16" height="30" fill="black"/>
    <rect x="202" y="531" width="16" height="30" fill="black"/>
    <rect x="233" y="531" width="16" height="30" fill="black"/>
    <rect x="233" y="531" width="16" height="30" fill="black"/>
    <rect x="632" y="293" width="16" height="30" fill="black"/>
    <rect x="632" y="293" width="16" height="30" fill="black"/>
    <rect x="540" y="100" width="16" height="30" fill="black"/>
    <rect x="540" y="100" width="16" height="30" fill="black"/>
    <rect x="600" y="100" width="16" height="30" fill="black"/>
    <rect x="600" y="100" width="16" height="30" fill="black"/>
    <rect x="608" y="144" width="16" height="30" fill="black"/>
    <rect x="608" y="144" width="16" height="30" fill="black"/>
    <rect x="556" y="150" width="16" height="30" fill="black"/>
    <rect x="556" y="150" width="16" height="30" fill="black"/>
    <rect x="540" y="100" width="16" height="30" fill="black"/>
    <rect x="540" y="100" width="16" height="30" fill="black"/>
    <rect x="600" y="100" width="16" height="30" fill="black"/>
    <rect x="600" y="100" width="16" height="30" fill="black"/>
    <rect x="556" y="150" width="16" height="30" fill="black"/>
    <rect x="556" y="150" width="16" height="30" fill="black"/>
    <rect x="77" y="540" width="16" height="30" fill="black"/>
    <rect x="77" y="540" width="16" height="30" fill="black"/>
    <rect x="9" y="496" width="16" height="30" fill="black"/>
    <rect x="9" y="496" width="16" height="30" fill="black"/>
    <rect x="69" y="496" width="16" height="30" fill="black"/>
    <rect x="69" y="496" width="16" height="30" fill="black"/>
    <rect x="25" y="546" width="16" height="30" fill="black"/>
    <rect x="25" y="546" width="16" height="30" fill="black"/>
    <rect x="429" y="286" width="16" height="30" fill="black"/>
    <rect x="429" y="286" width="16" height="30" fill="black"/>
    <rect x="975" y="115" width="16" height="30" fill="black"/>
    <rect x="975" y="115" width="16" height="30" fill="black"/>
    <rect x="445" y="336" width="16" height="30" fill="black"/>
    <rect x="445" y="336" width="16" height="30" fill="black"/>
    <rect x="240" y="286" width="16" height="30" fill="black"/>
    <rect x="240" y="286" width="16" height="30" fill="black"/>
    <rect x="256" y="336" width="16" height="30" fill="black"/>
    <rect x="256" y="336" width="16" height="30" fill="black"/>
    <rect x="750" y="100" width="16" height="30" fill="black"/>
    <rect x="750" y="100" width="16" height="30" fill="black"/>
    <rect x="810" y="100" width="16" height="30" fill="black"/>
    <rect x="810" y="100" width="16" height="30" fill="black"/>
    <rect x="766" y="150" width="16" height="30" fill="black"/>
    <rect x="766" y="150" width="16" height="30" fill="black"/>
    <rect x="699" y="481" width="16" height="30" fill="black"/>
    <rect x="699" y="481" width="16" height="30" fill="black"/>
    <rect x="730" y="481" width="16" height="30" fill="black"/>
    <rect x="730" y="481" width="16" height="30" fill="black"/>
    <rect x="796" y="481" width="16" height="30" fill="black"/>
    <rect x="796" y="481" width="16" height="30" fill="black"/>
    <rect x="975" y="481" width="16" height="30" fill="black"/>
    <rect x="975" y="481" width="16" height="30" fill="black"/>
    <rect x="1006" y="481" width="16" height="30" fill="black"/>
    <rect x="1006" y="481" width="16" height="30" fill="black"/>
    <rect x="796" y="553" width="16" height="30" fill="black"/>
    <rect x="796" y="553" width="16" height="30" fill="black"/>
    <rect x="858" y="553" width="16" height="30" fill="black"/>
    <rect x="858" y="553" width="16" height="30" fill="black"/>
    <rect x="955" y="553" width="16" height="30" fill="black"/>
    <rect x="955" y="553" width="16" height="30" fill="black"/>
    <rect x="729" y="550" width="16" height="30" fill="black"/>
    <rect x="729" y="550" width="16" height="30" fill="black"/>
    <rect x="760" y="550" width="16" height="30" fill="black"/>
    <rect x="760" y="550" width="16" height="30" fill="black"/>
    <rect x="548" y="358" width="16" height="30" fill="black"/>
    <rect x="548" y="358" width="16" height="30" fill="black"/>
    <rect x="579" y="358" width="16" height="30" fill="black"/>
    <rect x="579" y="358" width="16" height="30" fill="black"/>
    <rect x="645" y="358" width="16" height="30" fill="black"/>
    <rect x="645" y="358" width="16" height="30" fill="black"/>
    <rect x="824" y="358" width="16" height="30" fill="black"/>
    <rect x="824" y="358" width="16" height="30" fill="black"/>
    <rect x="855" y="358" width="16" height="30" fill="black"/>
    <rect x="855" y="358" width="16" height="30" fill="black"/>
    <rect x="23" y="608" width="16" height="30" fill="black"/>
    <rect x="23" y="608" width="16" height="30" fill="black"/>
    <rect x="85" y="608" width="16" height="30" fill="black"/>
    <rect x="85" y="608" width="16" height="30" fill="black"/>
    <rect x="120" y="608" width="16" height="30" fill="black"/>
    <rect x="120" y="608" width="16" height="30" fill="black"/>
    <rect x="182" y="608" width="16" height="30" fill="black"/>
    <rect x="182" y="608" width="16" height="30" fill="black"/>
    <rect x="330" y="608" width="16" height="30" fill="black"/>
    <rect x="330" y="608" width="16" height="30" fill="black"/>
    <rect x="361" y="608" width="16" height="30" fill="black"/>
    <rect x="361" y="608" width="16" height="30" fill="black"/>
    <rect x="392" y="608" width="16" height="30" fill="black"/>
    <rect x="392" y="608" width="16" height="30" fill="black"/>
    <rect x="151" y="680" width="16" height="30" fill="black"/>
    <rect x="151" y="680" width="16" height="30" fill="black"/>
    <rect x="182" y="680" width="16" height="30" fill="black"/>
    <rect x="182" y="680" width="16" height="30" fill="black"/>
    <rect x="213" y="680" width="16" height="30" fill="black"/>
    <rect x="213" y="680" width="16" height="30" fill="black"/>
    <rect x="248" y="680" width="16" height="30" fill="black"/>
    <rect x="248" y="680" width="16" height="30" fill="black"/>
    <rect x="310" y="680" width="16" height="30" fill="black"/>
    <rect x="310" y="680" width="16" height="30" fill="black"/>
    <rect x="439" y="680" width="16" height="30" fill="black"/>
    <rect x="439" y="680" width="16" height="30" fill="black"/>
    <rect x="470" y="680" width="16" height="30" fill="black"/>
    <rect x="470" y="680" width="16" height="30" fill="black"/>
    <rect x="419" y="752" width="16" height="30" fill="black"/>
    <rect x="419" y="752" width="16" height="30" fill="black"/>
    <rect x="84" y="677" width="16" height="30" fill="black"/>
    <rect x="84" y="677" width="16" height="30" fill="black"/>
    <rect x="115" y="677" width="16" height="30" fill="black"/>
    <rect x="115" y="677" width="16" height="30" fill="black"/>
    <rect x="31" y="742" width="16" height="30" fill="black"/>
    <rect x="31" y="742" width="16" height="30" fill="black"/>
    <rect x="62" y="742" width="16" height="30" fill="black"/>
    <rect x="62" y="742" width="16" height="30" fill="black"/>
    <rect x="128" y="742" width="16" height="30" fill="black"/>
    <rect x="128" y="742" width="16" height="30" fill="black"/>
    <rect x="307" y="742" width="16" height="30" fill="black"/>
    <rect x="307" y="742" width="16" height="30" fill="black"/>
    <rect x="338" y="742" width="16" height="30" fill="black"/>
    <rect x="338" y="742" width="16" height="30" fill="black"/>
    <rect x="645" y="430" width="16" height="30" fill="black"/>
    <rect x="645" y="430" width="16" height="30" fill="black"/>
    <rect x="707" y="430" width="16" height="30" fill="black"/>
    <rect x="707" y="430" width="16" height="30" fill="black"/>
    <rect x="804" y="430" width="16" height="30" fill="black"/>
    <rect x="804" y="430" width="16" height="30" fill="black"/>
    <rect x="578" y="427" width="16" height="30" fill="black"/>
    <rect x="578" y="427" width="16" height="30" fill="black"/>
    <rect x="609" y="427" width="16" height="30" fill="black"/>
    <rect x="609" y="427" width="16" height="30" fill="black"/>
    <rect x="369" y="469" width="16" height="30" fill="black"/>
    <rect x="369" y="469" width="16" height="30" fill="black"/>
    <rect x="400" y="469" width="16" height="30" fill="black"/>
    <rect x="400" y="469" width="16" height="30" fill="black"/>
    <rect x="466" y="469" width="16" height="30" fill="black"/>
    <rect x="466" y="469" width="16" height="30" fill="black"/>
    <rect x="315" y="418" width="16" height="30" fill="black"/>
    <rect x="315" y="418" width="16" height="30" fill="black"/>
    <rect x="377" y="418" width="16" height="30" fill="black"/>
    <rect x="377" y="418" width="16" height="30" fill="black"/>
    <rect x="474" y="418" width="16" height="30" fill="black"/>
    <rect x="474" y="418" width="16" height="30" fill="black"/>
    <rect x="248" y="415" width="16" height="30" fill="black"/>
    <rect x="248" y="415" width="16" height="30" fill="black"/>
    <rect x="279" y="415" width="16" height="30" fill="black"/>
    <rect x="279" y="415" width="16" height="30" fill="black"/>
    </svg>
    
  
       `,
       
    },  

   {
    role: 'user',
      content: `please generate new svg code for a HOUSE!

      `,
    },
  ];

  try {
    // now we make the call to the api.
    // we wrap it in a try catch block to catch any errors
    const response = await llm.chat({  options, messages });
    console.log(response);

    const output = document.getElementById("out")

    output.innerHTML = response.completion.choices[0].message.content
  } catch (error) {
    // we had an error lets handle it
    console.error (error);
  }
});
