// RDS entrance exam

// sample
async function challenge() {
    const res = await fetch("https://exam.ankush.wiki/challenges");
    resData = await res.json();
    let count = 0;
    resData.data.forEach(item =>  {
        if(item.name.toLowerCase().includes("version")) {
            const versionOccurence = (item.name.toLowerCase().match(/version/g) || []).length;
            count+=versionOccurence;
        }
    });
    console.log(count)
    const postRes = await fetch("https://exam.ankush.wiki/challenges", {
      method: "POST",
      body: JSON.stringify({
        count
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const postResData = await postRes.json();
    console.log(postResData);
}
challenge()



// {
//     "numParts": 22,
//     "message": `Hello our top programmer Ashutosh Sahoo,\n        
//     Thank you for joining us in this time of great need.\n        \n        
//     We're once again in dire need of your skills to decode this new mission.\n        \
//     * Satellite has picked up strange communication, that can be downloaded with this API:\n\n       
//      /data?part=<PART Number>\n        \n        
//     We've only been able to deduce that we need to download all the parts that exist,\n        
//     You will see the total number of parts in the 'numParts' field here.\n\n        
//     There seems to be strange strict behaviour with how these APIs work:\n        
//     - If API is called incorrectly, we get locked out of the system for 60 seconds\n        
//     - From trial and error, we found out that /data can not be called within 2.5 seconds or more than 10 seconds apart.\n        
//     - If the chaincode is not submitted to /answers as POST in 3 minutes as payload { chaincode: <CHAINCODE VALUE> },\n            
//     then we need to call /assignments again to restart\n        
//     - If wrong chaincode is submitted, we have to wait for 3 minutes cooldown to end, before a new assignment can be provided.\n\n        
//     We have no idea what this data is, but it seems to be important. Together, it seems to \n        
//     create the 'chaincode' that we need to enable hyperdrive and finish the mission.\n        \n        
//     Your mission, should you choose to accept, is to use your coding skills, cunning mind, sharp logic and grit to help us get over the huddle.\n\n        
//     You are our only hope.\n        
//     All the best! Lightspeed ahead."
// }

// Here the code was not stopping for 3 seconds
// let resData;
// let rightData = '';
// const assignments = async () => {
//     const res = await fetch("https://exam.ankush.wiki/assignments");
//     resData = await res.json(); 
    
//     const fetchMorseData = async (i) => {
//         let allData = '';
//         const connection = await fetch(`https://exam.ankush.wiki/data?part=${i}`);
//         const connectionData = await connection.json();
//         const connData = [...connectionData.data];
//         rightData = connData.slice(connData.lastIndexOf("➡")+1)+" ";
//         // leftData = connData.slice(connData.indexOf("➡"))
//     }
    
//     for(let i = 1; i <= resData.numParts; i++) {
//         setTimeout(fetchMorseData(i), 3000);
//     }
//     console.log(rightData);
// }
// assignments();

/////////////////////////////////////////////////////////////////Sample Data
// 1 {"data":["-",".",".",".",".","➡➡➡","-","-",".","."]}
// 2 {"data":[".","-","-","-","-",".","-","-","-","-","➡➡➡","-",".","-","."]}
// 3 {"data":[".",".",".",".","-","➡➡➡",".","-"]}
// 4 {"data":[".","-","-","-","-",".",".",".",".",".","➡➡➡","-","-","-"]}
// 5 {"data":[".","-","-","-","-","-","-","-","-","-","➡➡➡",".","."]}
// 6 {"data":[".","-","-","-","-","-",".",".",".",".","➡➡➡","-",".",".","."]}
// 7 {"data":[".","-","-","-","-","-","-","-",".",".","➡➡➡","-","-",".","-"]}
// 8 {"data":[".",".",".","-","-","➡➡➡",".","."]}
// 9 {"data":[".",".",".",".",".","➡➡➡",".",".",".","-"]}
// 10 {"data":["-","-","-","-",".","➡➡➡","-",".","-","."]}
// 11 {"data":[".","-","-","-","-",".",".",".",".","-","➡➡➡",".",".",".","."]}
// 12 {"data":[".","-","-","-","-",".",".",".","-","-","➡➡➡",".","-",".","."]}
// 13 {"data":[".","-","-","-","-","-","-",".",".",".","➡➡➡","-","-",".","."]}
// 14 {"data":["-","-",".",".",".","➡➡➡","-","-","."]}
// 15 {"data":[".","-","-","-","-","-","-","-","-",".","➡➡➡","-",".","."]}
// 16 {"data":[".","-","-","-","-",".",".","-","-","-","➡➡➡","-","-","."]}
// 17 {"data":[".",".","-","-","-","-","-","-","-","-","➡➡➡","-","-"]}
// 18 {"data":["-","-","-",".",".","➡➡➡",".","-","-","-"]}
// 19 {"data":[".",".","-","-","-","➡➡➡","-","-",".","-"]}
// 20 {"data":[".","-","-","-","-","➡➡➡","-",".","-","-"]}
//////////////////////////////////////////////////////////////


const MORSE_CODE = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
    '----.': '9', '/': ' '
};
const assignments = async () => {
    let resData;
    let leftData = '';
    let rightData = '';
    const allData = {};
    const res = await fetch("https://exam.ankush.wiki/assignments");
    resData = await res.json();

    const fetchMorseData = async (i) => {
        const connection = await fetch(`https://exam.ankush.wiki/data?part=${i}`);
        const connectionData = await connection.json();
        const connData = [...connectionData.data].join("");
        leftData = connData.slice(0, connData.indexOf("➡"))
        rightData = connData.slice(connData.lastIndexOf("➡") + 1);
        console.log('connData', connData)
        console.log('allData', JSON.stringify(allData));
        if(leftData.length > 5) {
            allData[MORSE_CODE[leftData.slice(0,5)]+MORSE_CODE[leftData.slice(5,10)]] = MORSE_CODE[rightData]
        } else {
            allData[MORSE_CODE[leftData]] = MORSE_CODE[rightData]
        }
    }

    const fetchWithDelay = async (i) => {
        await new Promise(resolve => setTimeout(resolve, 2500));
        await fetchMorseData(i);
    }

    // const fetchPromises = [];
    for (let i = 1; i <= resData.numParts; i++) {
        await fetchWithDelay(i);
    }
    // await Promise.all(fetchPromises);

    const orderedData = Object.keys(allData).sort().reduce(
        (obj, key) => { 
        obj[key] = allData[key]; 
        return obj;
        }, 
        {}
    );
    console.log("orderedData", JSON.stringify(orderedData));
    const chaincode = Object.values(orderedData).join('');
    const postRes = await fetch("https://exam.ankush.wiki/answers", {
      method: "POST",
      body: JSON.stringify({
        chaincode
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const postResData = await postRes.json();
    console.log(postResData);
}

assignments();

//////////////////////////////////////////////////////////////////////////////////


const morseCode = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
  };

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function getData() {
    const numParts = 22;
    console.log({ numParts });

    const decode = {};
   
    for (let i = 1; i <= numParts; i++) {
      const res = await fetch("/data?part=" + i);
      const { data } = await res.json();
      const seperation = data.join("").split("➡➡➡");

      let key, value;

      seperation.forEach((morse) => {
        if (morse.length >= 5) {
          const x1 = morse.substring(0, 5);
          const x2 = morse.substring(5, 10);
          let val = "";
          if (x1) {
            val += morseCode[x1];
          }
          if (x2) {
            val += morseCode[x2];
          }
          key = val;
        } else {
          value = morseCode[morse];
        }
      });
      decode[key] = value;
      await timer(2500);
      console.log({ chainCode: decode });
    }
    await timer(500);

    let chainCode = "";

    for (const key in decode) {
      if (Object.prototype.hasOwnProperty.call(decode, key)) {
        chainCode += decode[key];
      }
    }

    console.log(chainCode);

    const submit = await fetch("/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chaincode: chainCode,
      }),
    });
    console.log(await submit.json());
  }
// https://exam.ankush.wiki/data?part=1
// {"data":[".","-","-","-","-",".",".",".",".","-","➡➡➡",".","-","-"]}

// Figure out --- create ur testing environment