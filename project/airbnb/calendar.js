    var today = new Date();
    var date = new Date();

    function prevCalendar() {
      today = new Date(today.getFullYear(), today.getMonth() -1, today.getDate());
      buildCalendar();
    }

    function nextCalendar() {
      today = new Date(today.getFullYear(), today.getMonth() +1, today.getDate());
      buildCalendar();
    }

    function buildCalendar() {
    var doMonth = new Date(today.getFullYear(), today.getMonth(),1);
    var lastDate = new Date(today.getFullYear(), today.getMonth() +1, 0);
    var tblCalendar = document.querySelector('#calendar');
    var tblCalendarYM = document.querySelector('#year-month');
    tblCalendarYM.innerHTML = today.getFullYear() + '년' + (today.getMonth()+1) + '월';

      console.log(today.getDate());
    while (tblCalendar.rows.length > 2) {
      tblCalendar.deleteRow(tblCalendar.rows.length -1);
    }

    var row = null;

    row = tblCalendar.insertRow();

    var cnt = 0;
    console.log(doMonth.getDay());
    for(var i = 0; i < doMonth.getDay(); i++) {
      cell = row.insertCell();
      cnt = cnt + 1;
      cell.classList.add('empty-cell')
      console.log(cell)
    }

    for(var j = 1; j <= lastDate.getDate(); j++) {
      cell = row.insertCell();
      cell.innerHTML = j;
      cnt = cnt + 1;
      if(cnt%7 == 0) {
        row = calendar.insertRow();
      }
      cell.classList.add('available')
    }
    }