import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
const FileSaver = require('file-saver');

const CustomImageEditor = () => {
    return (
      <ImageEditor
        includeUI={{
          loadImage: {
            path: "img/sampleImage.jpg",
            name: "SampleImage",
          },
          menu: ["shape", "filter", "text", 'mask', 'icon', 'draw', 'crop', 'flip', 'rotate'],
          initMenu: "filter",
          uiSize: {
            width: "1000px",
            height: "700px",
          },
          menuBarPosition: "bottom",
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    );
  };
  
  export default CustomImageEditor;