# CommonAngularFrame
这是一个Angular 2 + Typescript + Webpack的公用框架。  
为了避免重复的配置工作，我们可以用它来开始每一个项目。

它可能并不强大，因为主要提供一些基础设施：  
1. 一些基础配置（如：webpack配置仅针对dev环境）。  
2. 一个良好的文件结构。  
3. 一些示例代码。  

Note:
在package.json中，你也可使用anywhere: 
```
"prestart": "webpack --progress --colors"
"start": "anywhere -d ./dist -h localhost -p 8000"  
``` 