import { Editor, loader } from "@monaco-editor/react";
import { languages } from "monaco-editor";

const data: languages.html.HTMLDataV1 = {
  version: 1.1,
  tags: [
    {
      name: "foo",
      description: "The foo element",
      attributes: [
        { name: "bar" },
        {
          name: "baz",
          values: [
            {
              name: "baz-val-1"
            }
          ]
        }
      ]
    }
  ],
  globalAttributes: [
    {
      name: "fooAttr",
      description: "Foo Attribute"
    },
    {
      name: "xattr",
      description: "X attributes",
      valueSet: "x"
    }
  ],
  valueSets: [
    {
      name: "x",
      values: [
        {
          name: "xval",
          description: "x value"
        }
      ]
    }
  ]
}

const TemplateEditor = () => {

  function handleEditorChange(value: string | undefined) {
    console.log('here is the current model value:', value);
  }

  loader.init().then((monacoInstance) => {

    monacoInstance.languages.html.htmlDefaults.setOptions({
      data: {
        useDefaultDataProvider: false,
        dataProviders: { data }
      }
    });
    /* here is the instance of monaco, so you can use the `monacoInstance.languages` or whatever you want */
    // for example
    console.log("registerCompletionItemProvider",
      monacoInstance.languages.registerCompletionItemProvider
    );
    console.log("setMonarchTokensProvider",
      monacoInstance.languages.setMonarchTokensProvider,
    );
    console.log("defineTheme",
      monacoInstance.editor.defineTheme,
    );
    console.log("CtrlCmd",
      monacoInstance.KeyMod.CtrlCmd
    );
  })
    .catch((error) =>
      console.error("An error occurred during initialization of Monaco: ", error)
    );


  return <Editor
    height="80vh"
    defaultValue="// some comment"
    language="html"
    onChange={handleEditorChange}
  />;
}

export default TemplateEditor;