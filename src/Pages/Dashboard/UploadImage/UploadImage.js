// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// export default class UploadImage extends Component {
//   constructor(props) {
//     super(props);
//     this.uploadFile = this.uploadFile.bind(this);
//   }

//   uploadFile(event) {
//     let files = event.target.files[0];
//     console.log(files);
//     const accept = ["image/png"];
//     if (accept.indexOf(files[0].mediaType) > -1) {
//       this.setState({
//         image: files[0].getAsDataURL(),
//       });
//     }

//     if (files) {
//       let data = new FormData();
//       data.append("file", files);
//     }
//   }

//   render() {
//     return (
//       <span>
//         <input
//           type="file"
//           name="myFile"
//           ref={this.myFiles}
//           onChange={this.uploadFile}
//         />
//       </span>
//     );
//   }
// }

// ReactDOM.render(<UploadImage />, document.getElementById("root"));

// import React from "react";
// const UploadImage = () => {
//   fileUpload = () => {
//     const files = this.myFiles.files;
//     const accept = ["image/png"];
//     if (accept.indexOf(files[0].mediaType) > -1) {
//       this.setState({
//         image: files[0].getAsDataURL(),
//       });
//     }
//   };
//   return (
//     <div>
//       <input type="file" ref={this.myFiles} onChange={this.fileUpload} />
//     </div>
//   );
// };
// export default UploadImage;
