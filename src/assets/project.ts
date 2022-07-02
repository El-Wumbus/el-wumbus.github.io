let projects:Array<object> = [
  {
    Project_Name: "qe",
    Project_Description: "quick encryption is a program that encrypts (with 256bit-AES) and decrypts files in a single command by usage of a passphrase. Written in python.",
    Project_URL: "https://github.com/El-Wumbus/qe",
    Project_Download: "https://github.com/El-Wumbus/qe/releases/latest",
    Language: "python"
  },
  {
    Project_Name: "Windows-10-Scripts",
    Project_Description: "This is a collection of programs for windows 10 that I have created. Written mostly in C.",
    Project_URL: "https://github.com/El-Wumbus/windows-10-scripts",
    Project_Download: "https://github.com/El-Wumbus/windows-10-scripts/releases/latest",
    Language: "C, python, powershell"
  },
  {
    Project_Name: "qa",
    Project_Description: "quick archival. A program that allows for single command file compression and simple extraction. Written in python.",
    Project_URL: "https://github.com/El-Wumbus/qa",
    Project_Download: "https://github.com/El-Wumbus/qa/releases/latest",
    Language: "python"
  },
  {
    Project_Name: "udl",
    Project_Description: "UrlDownLoader is a program that allows for making Http(s) get requests. You can request content through the CLI. Written entirely in C.",
    Project_URL: "https://github.com/El-Wumbus/udl",
    Project_Download: "https://github.com/El-Wumbus/udl/releases/latest",
    Language: "C"
  },
  {
    Project_Name: "el-wumbus.github.io",
    Project_Description: "This is my personal website. Created using Vuejs, BootstrapCSS, CSS, Html, Javascript, and Typescript",
    Project_URL: "https://github.com/El-Wumbus/el-wumbus.github.io",
    Project_Download: "https://github.com/El-Wumbus/el-wumbus.github.io/archive/refs/heads/main.zip",
    Language: "html, css, javascript, typescript, vue"
  }
]

export default {
  data() {
    return {
      projects: projects,
    }
  }
}
