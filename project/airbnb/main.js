    //상단 고정 메뉴바
    var fixedNavBar = document.querySelector('#fixed-nav');
    var appearFixedNav = function() {
      if (window.scrollY >= 650) {
        fixedNavBar.style.display = 'block';
      } else {
        fixedNavBar.style.display = 'none';
      }
    }
    window.addEventListener('scroll', appearFixedNav);

    // 사진 그림자 마우스오버 이벤트

    var photoList = document.querySelectorAll('.show-photo');
    for (var i = 0; i < photoList.length; i++) {
      var photo = photoList[i];
      console.log(photo);
      photo.addEventListener('mouseover', function (e) {
        var shadowPhotoList = document.querySelectorAll('.show-photo');
        for (var j = 0; j < shadowPhotoList.length; j++) {
          var shadowPhoto = shadowPhotoList[j];
          console.log(shadowPhoto);
          if (e.target != shadowPhoto) {
            shadowPhoto.style.opacity = '0.7';
          }
        }
      });
      photo.addEventListener('mouseout', removeShadowPhoto);
    }
    
    function removeShadowPhoto(e) {
      console.log(e.target);
      var shadowPhotoList = document.querySelectorAll('.show-photo');
      for (var j = 0; j < shadowPhotoList.length; j++) {
        var shadowPhoto = shadowPhotoList[j];
        console.log(shadowPhoto);
        if (e.target != shadowPhoto) {
          shadowPhoto.style.opacity = '1';
        }
      }
    }
    
    //우측 예약요청 하단 추가 메세지
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

    //스크롤 책갈피
    var navRoomExplain = document.querySelector('#nav-room-explain');
    var navReview = document.querySelector('#nav-review');
    var navHost = document.querySelector('#nav-host');
    var navLocation = document.querySelector('#nav-location');
    var navRefund = document.querySelector('#nav-refund');

    var navList = [navRoomExplain, navReview, navHost, navLocation, navRefund];
    
    function colorNav() {
      for (i = 0; navList.length > i; i++) {
        var navItem = navList[i];
        if (window.scrollY >= 705 && window.scrollY < 2266) {
            console.log('navItem');
            navItem.style.color = '#006A70';
            navList[0].style.color = '#484848';
          } else if (window.scrollY >= 2266 && window.scrollY < 3729) {
            navItem.style.color = '#006A70';
            navList[1].style.color = '#484848';
          } else if (window.scrollY >= 3730 && window.scrollY < 4180) {
            navItem.style.color = '#006A70';
            navList[2].style.color = '#484848';
          } else if (window.scrollY >= 4180 && window.scrollY < 4690) {
            navItem.style.color = '#006A70';
            navList[3].style.color = '#484848';
        } else {
          navItem.style.color = '#006A70';
          navList[4].style.color = '#484848';
        }
      }
    }
    
    window.addEventListener('scroll', colorNav); 



    //번역하기 버튼
    var translateBtn = document.querySelector('#text-translate-btn');
    var translate = function() {
      console.log('translate')
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
    
    //레이어 팝업
    var popupRoomBtn = document.querySelector('#room-detail-btn');
    
    popupRoomBtn.addEventListener('click', function() {
      var bodyTag = document.querySelector('body');
      var roomdetail = document.querySelector('#room-detail-popup');
      bodyTag.style.position = 'fixed';
      roomdetail.style.display = 'block';
    } )

    var closeBtn = document.querySelector('#close-room-btn');
    closeBtn.addEventListener('click', function (){
      var bodyTag = document.querySelector('body');
      var roomdetail = document.querySelector('#room-detail-popup');
      bodyTag.style.position = 'relative';
      roomdetail.style.display = 'none';
    })

    var popupAmenityBtn = document.querySelector('#amenity-popup-btn');
    var bodyTag = document.querySelector('body');
    var amenityDetail = document.querySelector('#amenity-detail-popup');
    popupAmenityBtn.addEventListener('click', function() {
      bodyTag.style.position = 'fixed';
      amenityDetail.style.display = 'block';
    })
    var closeAmenityBtn = document.querySelector('#amenity-close-btn');
    closeAmenityBtn.addEventListener('click', function(event) {
      console.log(event);
      bodyTag.style.position = 'relative';
      amenityDetail.style.display = 'none';
    })

    var reservationRequestBtn = document.querySelector('#reservation-request-btn');
    var popupRequest = document.querySelector('#reservation-request');
    reservationRequestBtn.addEventListener('click', function() {
      bodyTag.style.position = 'fixed';
      popupRequest.style.display = 'block';
    })
    var closeRequestBtn = document.querySelector('#close-reservation-btn');
    closeRequestBtn.addEventListener('click', function(event) {
      console.log(event);
      bodyTag.style.position = 'relative';
      popupRequest.style.display = 'none';
    })

    //더보기 기능
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

     // 추천숙소 캐러셀

     var nextRoombtn = document.querySelector('#recommend-room-next-btn');
     var recommendRoomList = document.querySelectorAll('.recommend-item');
     nextRoombtn.addEventListener('click', function(event){
       for (var i = 0; i < recommendRoomList.length; i++) {
         console.log(event);
         var recommendRoom = recommendRoomList[i];
         console.log(recommendRoom);

       } 
     })
    //다음 지도 api
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
  

   var nextSlideBtn = document.querySelector(.rc-next-btn);

   next
    

    