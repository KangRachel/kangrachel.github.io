    var fixedNavBar = document.querySelector('#fixed-nav');
    var appearFixedNav = function() {
      if (window.scrollY >= 650) {
        fixedNavBar.style.display = 'block';
      } else {
        fixedNavBar.style.display = 'none';
      }
    }
    window.addEventListener('scroll', appearFixedNav);

    var addedMessage = document.querySelector('#message-box');
    var appearAddedMessage = function() {
      if (window.scrollY >= 670) {
        addedMessage.style.display = 'block';
        addedMessage.style.opacity = '1';
      } else {
        addedMessage.style.display = 'none';
        addedMessage.style.opacity = '0';
      }
    }
    window.addEventListener('scroll', appearAddedMessage);


    var translateBtn = document.querySelector('#text-translate-btn');
    var translate = function() {
      var btnText = document.querySelector('#text-translate-btn span');
      var beforeTranslate = document.querySelector('#english-explain');
      var afterTranslate = document.querySelector('#korean-explain');
      if (beforeTranslate.style.display != 'inline-block') {
        afterTranslate.style.display = 'none';
        beforeTranslate.style.display = 'inline-block';
        btnText.innerHTML = '이 설명을 한국어로 번역하기';
      } else {
        afterTranslate.style.display ='inline-block';
        beforeTranslate.style.display ='none';
        btnText.innerHTML = '원문으로 보기';
      }
    }
    translateBtn.addEventListener('click', translate);


    function locationMore(event) {
      console.log(event);
      var moreReadLocationBtn = document.getElementById('more-read-lo');
      var target = event.srcElement;
      if (moreReadLocationBtn.style.display != 'block') {
        moreReadLocationBtn.style.display = 'block';
        moreReadLocationBtn.style.opacity = '1';
        target.value = '숨기기';
      } else {
        document.getElementById('more-read-lo').style.display = 'none';
        document.getElementById('more-read-lo').style.opacity = '0';
        target.value = '이 지역 자세히 알아보기';}
    }

    function roomMore(event) {
      console.log(event);
      var moreReadRefundBtn = document.getElementById('more-read-refund');
      var target = event.srcElement;
      if (moreReadRefundBtn.style.display != 'block') {
        moreReadRefundBtn.style.display = 'block';
        moreReadRefundBtn.style.opacity = '1';
        target.value = '이용 규칙 숨기기';
      } else { 
        moreReadRefundBtn.style.display = 'none';
        moreReadRefundBtn.style.opacity = '0';
        target.value = '숙소 이용규칙 모두 보기';
      }
    }
    function moreCondition(event) {
      console.log(event);
      var moreReadConditionBtn = document.getElementById('read-more-condition');
      var target = event.srcElement;
      if (moreReadConditionBtn.style.display != 'block') {
        moreReadConditionBtn.style.display = 'block';
        moreReadConditionBtn.style.opacity = '1';
        target.value = '정책 숨기기';
      } else {
        moreReadConditionBtn.style.display = 'none';
        moreReadConditionBtn.style.opacity = '0';
        target.value = '정책 자세히 읽기';
      }
    }

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
                    center: new daum.maps.LatLng(33.2447806, 126.5644081), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

          var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

          // 마커가 표시될 위치입니다 
          var markerPosition  = new daum.maps.LatLng(33.2447806, 126.5644081); 

          // 마커를 생성합니다
          var marker = new daum.maps.Marker({
              position: markerPosition
          });
          marker.setMap(map);