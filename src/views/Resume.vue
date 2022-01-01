<template >        
    <vue-pdf-app 
        pdf="resume.pdf" 
        theme="white" 
        :config='config' 
        file-name="Jesal Gandhi - Resume">
    </vue-pdf-app>
</template>

<script>

export default {
  data() {
    return {
      config: {
          toolbar:false,
        // toolbar: {
        //     toolbarViewerLeft: false,
        //     toolbarViewerMiddle: true,
        //     toolbarViewerRight: {
        //         presentationMode: true,
        //         openFile: false,
        //         print: false,
        //         download: true,
        //         viewBookmark: false
        //     }
        // },
        sidebar: false,
        secondaryToolbar: false
      }
    }
  }
}

</script>