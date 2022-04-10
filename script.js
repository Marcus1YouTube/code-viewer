const codeUploadBtt = document.querySelector('.code-picker')
const codeViewer = document.querySelector('#code-viewer')
const fileName = document.querySelector('.filename')
let codeHandle

codeUploadBtt.addEventListener('click', async () => {
    [codeHandle] = await window.showOpenFilePicker()

    if (codeHandle.kind === 'file') {
      const file = await codeHandle.getFile();
      const code = await file.text()
      codeViewer.innerText = code
      window.document.title = `${file.name} - Code Viewer`
      fileName.innerText = file.name
      
    } else if (codeHandle.kind === 'directory') {
      alert('Please select a file, not a directory')
      return
    }
})