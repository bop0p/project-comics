aframe.registerComponent("comics-poster", {
  init: function() {

  } ,

  posters : function (){
    const postersRef = [
        {
          id: "superman",
          url: "./assets/superman-poster.jpg"
        },
        {
          id: "spiderman",
          url: "./assets/spiderman-poster.jpg"
        },
  
        {
          id: "captain-aero",
          url: "./assets/captain-aero-poster.jpg"
        },
        {
          id: "outer-space",
          url: "./assets/outer-space-poster.jpg"
        }
      ];
      let prevoiusXPosition = -60;

      for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
     
  
        // Poster Element
      
  
        this.postersContainer.appendChild(borderEl);
      }
    },
    
    createBorder : function (){
        const border
    }
  
})