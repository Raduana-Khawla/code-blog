import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Line, LineContent, LineNo, Pre } from "../Style/StyledComponent";

const exampleCode = `Option Explicit

Private Sub Test()
   
    'Better Practice
    Dim dog2 As cDog
    Set dog = New cDog

    'Auto Instancing..Not recommended
    Dim dog1 As New cDog

End Sub
`.trim();

const ExcelCode1 = () => (
  <Highlight {...defaultProps} theme={theme} code={exampleCode} language="js">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default ExcelCode1;
