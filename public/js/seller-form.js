$('input[type=number]').on('mousewheel', function(e) {
    $(e.target).blur();
  });

function upload() {
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("finput");
    console.log(fileinput);
    var image = new SimpleImage(fileinput);
    console.log(image);
    image.drawTo(imgcanvas);
  }

  function updateSecondaryDropdown() {
    // Get the selected value from the main dropdown
    const mainDropdown = document.getElementById('main-dropdown');
    const selectedValue = mainDropdown.value;
    
    // Get the secondary dropdown and remove any existing options
    const secondaryDropdown = document.getElementById('secondary-dropdown');
    secondaryDropdown.innerHTML = '';
    
    // Add new options to the secondary dropdown based on the selected value
    if (selectedValue === 'Graphic Design') {
      const option0 = document.createElement('option');
      option0.text = 'Select Sub-Category';
      option0.value = '';
      secondaryDropdown.add(option0);

      const option1 = document.createElement('option');
      option1.text = 'Logo Design';
      option1.value = 'Logo Design';
      secondaryDropdown.add(option1);
      
      const option2 = document.createElement('option');
      option2.text = 'UI/UX';
      option2.value = 'UI UX';
      secondaryDropdown.add(option2);

      const option3 = document.createElement('option');
      option3.text = 'Illustrations';
      option3.value = 'Illustrations';
      secondaryDropdown.add(option3);
      
      const option4 = document.createElement('option');
      option4.text = 'Web Design';
      option4.value = 'Web Design';
      secondaryDropdown.add(option4);

    } 
    
    
    else if (selectedValue === 'Music Audio') {
      const option0 = document.createElement('option');
      option0.text = 'Select Sub-Category';
      option0.value = '';
      secondaryDropdown.add(option0);

      const option1 = document.createElement('option');
      option1.text = 'Voice Over';
      option1.value = 'Voice Over';
      secondaryDropdown.add(option1);
      
      const option2 = document.createElement('option');
      option2.text = 'Session Musician';
      option2.value = 'Session Musician';
      secondaryDropdown.add(option2);
      
      const option3 = document.createElement('option');
      option3.text = 'Background Music';
      option3.value = 'Background Music';
      secondaryDropdown.add(option3);

      const option4 = document.createElement('option');
      option4.text = 'Audio Engineering';
      option4.value = 'Audio Engineering';
      secondaryDropdown.add(option4);

    } 
    
    
    else if (selectedValue === 'Programming Tech') {

      const option0 = document.createElement('option');
      option0.text = 'Select Sub-Category';
      option0.value = '';
      secondaryDropdown.add(option0);


      const option1 = document.createElement('option');
      option1.text = 'App Development';
      option1.value = 'App Development';
      secondaryDropdown.add(option1);

       
      const option2 = document.createElement('option');
      option2.text = 'Game Development';
      option2.value = 'Game Development';
      secondaryDropdown.add(option2);
      
      const option3 = document.createElement('option');
      option3.text = 'IOT Development';
      option3.value = 'IOT Development';
      secondaryDropdown.add(option3);

      const option4 = document.createElement('option');
      option4.text = 'Cloud Computing';
      option4.value = 'Cloud Computing';
      secondaryDropdown.add(option4);

      

    }

    else if (selectedValue === 'Photography') {

      const option0 = document.createElement('option');
      option0.text = 'Select Sub-Category';
      option0.value = '';
      secondaryDropdown.add(option0);

      const option1 = document.createElement('option');
      option1.text = 'Product Photography';
      option1.value = 'Product Photography';
      secondaryDropdown.add(option1);

       
      const option2 = document.createElement('option');
      option2.text = 'Food Photography';
      option2.value = 'Food Photography';
      secondaryDropdown.add(option2);
      
      const option3 = document.createElement('option');
      option3.text = 'Fashion Photography';
      option3.value = 'Fashion Photography';
      secondaryDropdown.add(option3);

      const option4 = document.createElement('option');
      option4.text = 'Wildlife Photography';
      option4.value = 'Wildlife Photography';
      secondaryDropdown.add(option4);
    }

    else if (selectedValue === 'Animation') {

      const option0 = document.createElement('option');
      option0.text = 'Select Sub-Category';
      option0.value = '';
      secondaryDropdown.add(option0);

      const option1 = document.createElement('option');
      option1.text = 'Character Animation';
      option1.value = 'Character Animation';
      secondaryDropdown.add(option1);

       
      const option2 = document.createElement('option');
      option2.text = '3D Animation';
      option2.value = '3D Animation';
      secondaryDropdown.add(option2);
      
      const option3 = document.createElement('option');
      option3.text = '2D Animation';
      option3.value = '2D Animation';
      secondaryDropdown.add(option3);

      const option4 = document.createElement('option');
      option4.text = 'Anime';
      option4.value = 'Anime';
      secondaryDropdown.add(option4);
    }

    else if (selectedValue === 'Writing Translation') {

      const option0 = document.createElement('option');
      option0.text = 'Select Sub-Category';
      option0.value = '';
      secondaryDropdown.add(option0);

      const option1 = document.createElement('option');
      option1.text = 'Content Writing';
      option1.value = 'Content Writing';
      secondaryDropdown.add(option1);

       
      const option2 = document.createElement('option');
      option2.text = 'Technical Writing';
      option2.value = 'Technical Writing';
      secondaryDropdown.add(option2);
      
      const option3 = document.createElement('option');
      option3.text = 'Translation';
      option3.value = 'Translation';
      secondaryDropdown.add(option3);

      const option4 = document.createElement('option');
      option4.text = 'Subtitling';
      option4.value = 'Subtitling';
      secondaryDropdown.add(option4);
    }

  }