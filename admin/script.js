let datadummy = [
    {
        name: 'Loker A',
        location: 'Gedung Serba Guna',
        quantity: 20,
        status: 'Available',
        subLocker: [
            {
                name: 'Stephen',
                lockerType: 'Daily',
                lockerNumber: 'A01',                
                date: 'Tuesday, 18-06-2019',
                start: '07.30 AM',
                until: '09.15 PM',
                price: '150000'
            },
            {
                name: 'Elvi ',
                lockerType: 'Hourly',
                lockerNumber: 'A02',
                date: 'Tuesday, 18-06-2019',
                start: '07.30 AM',
                until: '09.15 PM',
                price: '150000'
            }
        ]
    }
]

let objLocker = {
    name: '',
    location: '',
    quantity: '',
    status: '',
    subLocker: []
}

let objSubLocker = {
    name: '',
    lockerType: '',
    lockerNumber: '',
    date: '',
    start: '',
    until: '',
    price: '' 
}

let datadummy2 = [
    {
        name: 'Coca-Cola',
        quantity: 20,
        status: 'Available',
        subRefreshment: [
            {
                name: 'Groot',
                date: 'Tuesday, 18-07-2019',
                time: '11.34 AM',
                quantity: 2,
                price: '15000'
            },
            {
                name: 'Rocket',
                date: 'Tuesday, 18-07-2019',
                time: '12.55 AM',
                quantity: 1,
                price: '7500'
            },
            {
                name : 'Peter Quill',
                date: 'Wednesday, 19-07-2019',
                time: '09.11 AM',
                quantity: 1,
                price: '7500'
            },
        ]
    }
]

let objRefreshment = {
    name: '',
    quantity: '',
    status: '',
    subRefreshment: []
}

let objSubRefreshment = {
    name: '',
    date: '',
    time: '',
    quantity: '',
    price: ''
}

let datadummy3 = [
    {
        name: 'Salsabila Margayanti',
        phone: '0895344354454',
        gender: 'Female',
        description: 'BB = 48 kg, TB = 172 cm',
        subTrainer: [
            {
                specialization: 'Makan makan',
                initial_rate: '20000',
                user_rate: '*****',
            },
        ]
    }
]

let objTrainer = {
    name: '',
    phone: '',
    gender: '',
    description: '',
    subTrainer: []
}

let objSubTrainer = {
    specialization: '',
    initial_rate: '',
    user_rate: '',
}

let datadummysc = [
    {
        name: 'Senam SKJ',
        date: 'Tuesday, 18-06-2019',
        start_until: '07.30 AM - 09.30 AM',
        category: 'Kebugaran',
        instructor: 'Bella Jang',
        price: 'Rp 120.000',
        location: 'Gedung Serba Guna',
        quota: '20 persons',
        description: '-',
        name2: 'Stephany',
        booked: 'Monday, 17-060-2019'
    }
]

let objSchedule = {
    name: '',
    date: '',
    start_until: '',
    category: '',
    instructor: '',
    price: '',
    location: '',
    quota: '',
    description: '',
    name2: '',
    booked: ''
}

let obj = [
    {
        schedule: "Running",
        category: "Run",
        date: "Tuesday, 18-06-2019",
        start_until: "07:30 PM - 08:30 PM",
        instructor: "Kuma",
        price: "Rp. 250.000"
    }
]

$(document).ready(function () {

    $("#content-menu").append(`
        <div class="box">
        <div class="box-header">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="box-title">Rocca's Today Schedules</h3>
                </div>
            </div>
        </div>
        <div class="box-body">
            <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Schedule_Name"> Schedule Name</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Category"> Category</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start - Until</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Instructor" > Instructor</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>${obj[0].schedule}</td>
                        <td>${obj[0].category}</td>
                        <td>${obj[0].date}</td>
                        <td>${obj[0].start_until}</td>
                        <td>${obj[0].instructor}</td>
                        <td>${obj[0].price}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    `)

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#home').on('click', function() {
        $("#content-menu").empty()
        obj = [
            {
                schedule: "Running",
                category: "Run",
                date: "Tuesday, 18-06-2019",
                start_until: "07:30 PM - 08:30 PM",
                instructor: "Kuma",
                price: "Rp. 250.000"
            }
        ]
        $("#content-menu").append(`
        <div class="box">
        <div class="box-header">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="box-title">Rocca's Today Schedules</h3>
                </div>
            </div>
        </div>
        <div class="box-body">
            <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Schedule_Name"> Schedule Name</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Category"> Category</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start - Until</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Instructor" > Instructor</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>${obj[0].schedule}</td>
                        <td>${obj[0].category}</td>
                        <td>${obj[0].date}</td>
                        <td>${obj[0].start_until}</td>
                        <td>${obj[0].instructor}</td>
                        <td>${obj[0].price}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    <table data-toggle="table">
        `)

    })
    
    function backbuttonschedule() { 
        $("#content-menu").empty()
        $("#content-menu").append(`
            <div class="box">
                <div class="box-header">
                    <div class="row justify-content-between">
                        <div class="col-md-3">
                            <h3 class="box-title">Rocca's Schedules</h3>   
                        </div>
                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                            <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> New Schedule </a>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                    <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Schedule_Name"> Schedule Name</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Category"> Category</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start - Until</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Instructor" > Instructor</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Detail"> Detail</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                        <tbody id="dataSchedule">                            
                        </tbody>
                    </table>
                </div>
            </div>
            
            
            <table data-toggle="table">
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Schedule</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form action="/action.php" method="patch">
                                <div class="form-group">
                                    <label for="sportCategory"><strong style="color: red;">*</strong> Sport Category</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Category">
                                        <option value="selectCategory">Select Category</option>
                                        <option value="Training">Training</option>
                                        <option value="Run">Run</option>
                                        <option value="Yoga">Yoga</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                                <div class="form-group">
                                    <label for="location">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="Location" required>
                                </div>
                                <div class="form-group">
                                    <label for="quota">Quota</label>
                                    <input type="number" max="20" class="form-control" id="quota" placeholder="Quota" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorName"><strong style="color: red;">*</strong> Instructor Name</label>
                                    <input type="text" class="form-control" id="instructorName" placeholder="Instructor Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorSpecialization"> Instructor Specialization</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Specialization">
                                          <option value="selectSpecialization">Select Specialization</option>
                                          <option value="Makan">Makan makan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="beginningTime">Beginning Time</label>
                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="finishingTime">Finishing Time</label>
                                    <input type="time" class="form-control" id="finishingTime" placeholder="Finishing Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="description"> Description:</label>
                                    <textarea class="form-control" rows="5" id="description"></textarea>
                                </div>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal" id="myModal1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">New Schedule</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form action="/action.php" method="patch">
                                <div class="form-group">
                                    <label for="sportCategory"><strong style="color: red;">*</strong> Sport Category</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Category">
                                        <option value="selectCategory">Select Category</option>
                                        <option value="Training">Training</option>
                                        <option value="Run">Run</option>
                                        <option value="Yoga">Yoga</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                                <div class="form-group">
                                    <label for="location">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="Location" required>
                                </div>
                                <div class="form-group">
                                    <label for="quota">Quota</label>
                                    <input type="number" max="20" class="form-control" id="quota" placeholder="Quota" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorName"><strong style="color: red;">*</strong> Instructor Name</label>
                                    <input type="text" class="form-control" id="instructorName" placeholder="Instructor Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorSpecialization"> Instructor Specialization</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Specialization">
                                          <option value="selectSpecialization">Select Specialization</option>
                                          <option value="Makan">Makan makan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="beginningTime">Beginning Time</label>
                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="finishingTime">Finishing Time</label>
                                    <input type="time" class="form-control" id="finishingTime" placeholder="Finishing Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="description"> Description:</label>
                                    <textarea class="form-control" rows="5" id="description"></textarea>
                                </div>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


        `)

        for (var i=0; i<datadummysc.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummysc[i].name}</td>
                    <td style="vertical-align: middle">${datadummysc[i].category}</td>
                    <td style="vertical-align: middle">${datadummysc[i].date}</td>
                    <td style="vertical-align: middle">${datadummysc[i].start_until}</td>
                    <td style="vertical-align: middle">${datadummysc[i].instructor}</td>
                    <td style="vertical-align: middle">${datadummysc[i].price}</td>
                    <td style="vertical-align: middle"> <button id="scheduleName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteSchedule${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                </tr>
            `).appendTo("#dataSchedule")
            $(`#scheduleName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name of Event   : ${datadummysc[0].name}
                    </p>
                    <p>
                        Date            : ${datadummysc[0].date}
                    </p>
                    <p>
                        Start - Until   : ${datadummysc[0].start_until}
                    </p>
                    <p>
                        Category        : ${datadummysc[0].category}
                    </p>
                    <p>
                        Instructor      : ${datadummysc[0].instructor}
                    </p>
                    <p>
                        Price           : ${datadummysc[0].price}
                    </p>
                    <p>
                        Location        : ${datadummysc[0].location}
                    </p>
                    <p>
                        Quota           : ${datadummysc[0].quota}
                    </p>
                    <p>
                        Description     : ${datadummysc[0].description}
                    </p>
                    <p>
                        Name            : ${datadummysc[0].name2}
                    </p>
                    <p>
                        Booked at       : ${datadummysc[0].booked}
                    </p>
                    <button type="button" class="btn btn-secondary" id="backschedule">Back</button>
                `)
                $('#backschedule').on('click', function() {
                        $("#content-menu").empty()
                        $("#content-menu").append(`
                            <div class="box">
                                <div class="box-header">
                                    <div class="row justify-content-between">
                                        <div class="col-md-3">
                                            <h3 class="box-title">Rocca's Schedules</h3>   
                                        </div>
                                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                                            <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> New Schedule </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                        <thead>
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Schedule_Name"> Schedule Name</th> 
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Category"> Category</th> 
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start - Until</th>
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Instructor" > Instructor</th>
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Detail"> Detail</th>
                                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                                        </thead>
                                        <tbody id="dataSchedule">                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            
                            <table data-toggle="table">
                            <div class="modal" id="myModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">Edit Schedule</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <form action="/action.php" method="patch">
                                                <div class="form-group">
                                                    <label for="sportCategory"><strong style="color: red;">*</strong> Sport Category</label>
                                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Category">
                                                        <option value="selectCategory">Select Category</option>
                                                        <option value="Training">Training</option>
                                                        <option value="Run">Run</option>
                                                        <option value="Yoga">Yoga</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="price">Price</label>
                                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="location">Location</label>
                                                    <input type="text" class="form-control" id="location" placeholder="Location" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="quota">Quota</label>
                                                    <input type="number" max="20" class="form-control" id="quota" placeholder="Quota" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="instructorName"><strong style="color: red;">*</strong> Instructor Name</label>
                                                    <input type="text" class="form-control" id="instructorName" placeholder="Instructor Name" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="instructorSpecialization"> Instructor Specialization</label>
                                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Specialization">
                                                          <option value="selectSpecialization">Select Specialization</option>
                                                          <option value="Makan">Makan makan</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="beginningTime">Beginning Time</label>
                                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="finishingTime">Finishing Time</label>
                                                    <input type="time" class="form-control" id="finishingTime" placeholder="Finishing Time" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="description"> Description:</label>
                                                    <textarea class="form-control" rows="5" id="description"></textarea>
                                                </div>
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                                        
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                
                            <div class="modal" id="myModal1">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">New Schedule</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <form action="/action.php" method="patch">
                                                <div class="form-group">
                                                    <label for="sportCategory"><strong style="color: red;">*</strong> Sport Category</label>
                                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Category">
                                                        <option value="selectCategory">Select Category</option>
                                                        <option value="Training">Training</option>
                                                        <option value="Run">Run</option>
                                                        <option value="Yoga">Yoga</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="price">Price</label>
                                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="location">Location</label>
                                                    <input type="text" class="form-control" id="location" placeholder="Location" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="quota">Quota</label>
                                                    <input type="number" max="20" class="form-control" id="quota" placeholder="Quota" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="instructorName"><strong style="color: red;">*</strong> Instructor Name</label>
                                                    <input type="text" class="form-control" id="instructorName" placeholder="Instructor Name" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="instructorSpecialization"> Instructor Specialization</label>
                                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Specialization">
                                                          <option value="selectSpecialization">Select Specialization</option>
                                                          <option value="Makan">Makan makan</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="beginningTime">Beginning Time</label>
                                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="finishingTime">Finishing Time</label>
                                                    <input type="time" class="form-control" id="finishingTime" placeholder="Finishing Time" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="description"> Description:</label>
                                                    <textarea class="form-control" rows="5" id="description"></textarea>
                                                </div>
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                        
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <!-- Modal (Delete) -->
                                <div id="deletemodal" class="modal fade">
                                    <div class="modal-dialog modal-confirm">
                                        <div class="modal-content">
                                            <div class="modal-header">			
                                                <h4 class="modal-title">Are you sure?</h4>	
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Do you really want to delete it? This process cannot be undone.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                
                        `)
                
                        for (var i=0; i<datadummysc.length; i++) {
                            $(`
                                <tr>
                                    <td style="vertical-align: middle">${datadummysc[i].name}</td>
                                    <td style="vertical-align: middle">${datadummysc[i].category}</td>
                                    <td style="vertical-align: middle">${datadummysc[i].date}</td>
                                    <td style="vertical-align: middle">${datadummysc[i].start_until}</td>
                                    <td style="vertical-align: middle">${datadummysc[i].instructor}</td>
                                    <td style="vertical-align: middle">${datadummysc[i].price}</td>
                                    <td style="vertical-align: middle"> <button id="scheduleName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                                    <td style="vertical-align: middle">
                                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteSchedule${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                        </td>
                                </tr>
                            `).appendTo("#dataSchedule")
                            $(`#scheduleName${i}`).on('click', function() {
                                $("#content-menu").empty()
                                $("#content-menu").append(`
                                    <p>
                                        Name of Event   : ${datadummysc[0].name}
                                    </p>
                                    <p>
                                        Date            : ${datadummysc[0].date}
                                    </p>
                                    <p>
                                        Start - Until   : ${datadummysc[0].start_until}
                                    </p>
                                    <p>
                                        Category        : ${datadummysc[0].category}
                                    </p>
                                    <p>
                                        Instructor      : ${datadummysc[0].instructor}
                                    </p>
                                    <p>
                                        Price           : ${datadummysc[0].price}
                                    </p>
                                    <p>
                                        Location        : ${datadummysc[0].location}
                                    </p>
                                    <p>
                                        Quota           : ${datadummysc[0].quota}
                                    </p>
                                    <p>
                                        Description     : ${datadummysc[0].description}
                                    </p>
                                    <p>
                                        Name            : ${datadummysc[0].name2}
                                    </p>
                                    <p>
                                        Booked at       : ${datadummysc[0].booked}
                                    </p>
                                    <button type="button" class="btn btn-secondary" id="backschedule">Back</button>
                                `)
                                $('#backschedule').on('click', backbuttonschedule())
                            })
                        }
                        $('#dtBasicExample').DataTable();
                        $('.dataTables_length').addClass('bs-select');
                    

                })
            })
        }
        $('#dtBasicExample').DataTable();
        $('.dataTables_length').addClass('bs-select');
    }

    $("#schedule").on('click', function() { 
        $("#content-menu").empty()
        $("#content-menu").append(`
            <div class="box">
                <div class="box-header">
                    <div class="row justify-content-between">
                        <div class="col-md-3">
                            <h3 class="box-title">Rocca's Schedules</h3>   
                        </div>
                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                            <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> New Schedule </a>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                    <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Schedule_Name"> Schedule Name</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Category"> Category</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start - Until</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Instructor" > Instructor</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Detail"> Detail</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                        <tbody id="dataSchedule">                            
                        </tbody>
                    </table>
                </div>
            </div>
            
            
            <table data-toggle="table">
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Schedule</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form action="/action.php" method="patch">
                                <div class="form-group">
                                    <label for="sportCategory"><strong style="color: red;">*</strong> Sport Category</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Category">
                                        <option value="selectCategory">Select Category</option>
                                        <option value="Training">Training</option>
                                        <option value="Run">Run</option>
                                        <option value="Yoga">Yoga</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                                <div class="form-group">
                                    <label for="location">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="Location" required>
                                </div>
                                <div class="form-group">
                                    <label for="quota">Quota</label>
                                    <input type="number" max="20" class="form-control" id="quota" placeholder="Quota" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorName"><strong style="color: red;">*</strong> Instructor Name</label>
                                    <input type="text" class="form-control" id="instructorName" placeholder="Instructor Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorSpecialization"> Instructor Specialization</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Specialization">
                                          <option value="selectSpecialization">Select Specialization</option>
                                          <option value="Makan">Makan makan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="beginningTime">Beginning Time</label>
                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="finishingTime">Finishing Time</label>
                                    <input type="time" class="form-control" id="finishingTime" placeholder="Finishing Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="description"> Description:</label>
                                    <textarea class="form-control" rows="5" id="description"></textarea>
                                </div>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal" id="myModal1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">New Schedule</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form action="/action.php" method="patch">
                                <div class="form-group">
                                    <label for="sportCategory"><strong style="color: red;">*</strong> Sport Category</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Category">
                                        <option value="selectCategory">Select Category</option>
                                        <option value="Training">Training</option>
                                        <option value="Run">Run</option>
                                        <option value="Yoga">Yoga</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                                <div class="form-group">
                                    <label for="location">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="Location" required>
                                </div>
                                <div class="form-group">
                                    <label for="quota">Quota</label>
                                    <input type="number" max="20" class="form-control" id="quota" placeholder="Quota" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorName"><strong style="color: red;">*</strong> Instructor Name</label>
                                    <input type="text" class="form-control" id="instructorName" placeholder="Instructor Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="instructorSpecialization"> Instructor Specialization</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Specialization">
                                          <option value="selectSpecialization">Select Specialization</option>
                                          <option value="Makan">Makan makan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="beginningTime">Beginning Time</label>
                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="finishingTime">Finishing Time</label>
                                    <input type="time" class="form-control" id="finishingTime" placeholder="Finishing Time" required>
                                </div>
                                <div class="form-group">
                                    <label for="description"> Description:</label>
                                    <textarea class="form-control" rows="5" id="description"></textarea>
                                </div>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


        `)

        for (var i=0; i<datadummysc.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummysc[i].name}</td>
                    <td style="vertical-align: middle">${datadummysc[i].category}</td>
                    <td style="vertical-align: middle">${datadummysc[i].date}</td>
                    <td style="vertical-align: middle">${datadummysc[i].start_until}</td>
                    <td style="vertical-align: middle">${datadummysc[i].instructor}</td>
                    <td style="vertical-align: middle">${datadummysc[i].price}</td>
                    <td style="vertical-align: middle"> <button id="scheduleName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteSchedule${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                </tr>
            `).appendTo("#dataSchedule")
            $(`#scheduleName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name of Event   : ${datadummysc[0].name}
                    </p>
                    <p>
                        Date            : ${datadummysc[0].date}
                    </p>
                    <p>
                        Start - Until   : ${datadummysc[0].start_until}
                    </p>
                    <p>
                        Category        : ${datadummysc[0].category}
                    </p>
                    <p>
                        Instructor      : ${datadummysc[0].instructor}
                    </p>
                    <p>
                        Price           : ${datadummysc[0].price}
                    </p>
                    <p>
                        Location        : ${datadummysc[0].location}
                    </p>
                    <p>
                        Quota           : ${datadummysc[0].quota}
                    </p>
                    <p>
                        Description     : ${datadummysc[0].description}
                    </p>
                    <p>
                        Name            : ${datadummysc[0].name2}
                    </p>
                    <p>
                        Booked at       : ${datadummysc[0].booked}
                    </p>
                    <button type="button" class="btn btn-secondary" id="backschedule">Back</button>
                `)
                $('#backschedule').on('click', backbuttonschedule())
            })
        }
        $('#dtBasicExample').DataTable();
        $('.dataTables_length').addClass('bs-select');
    })

    function backbuttonlocker() {
        $("#content-menu").empty()
        $("#content-menu").append(`
        <div class="box">
            <div class="box-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="box-title">Rocca's Locker</h3>
                    </div>
                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                            <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Locker </a>
                        </div>
                    </div>
            </div>
            <div class="box-body">
                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="location">Location</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="status" >Status</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                    <tbody id="dataLocker">
                    </tbody>
                </table>
            </div>
        </div>

        <table data-toggle="table">
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Locker Information</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="location"><strong style="color: red;">*</strong> Location</label>
                                <input type="text" class="form-control" id="location" placeholder="Location" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <table data-toggle="table">
        <div class="modal" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add Locker</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="location"><strong style="color: red;">*</strong> Location</label>
                                <input type="text" class="form-control" id="location" placeholder="Location" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
        <div id="deletemodal" class="modal fade">
            <div class="modal-dialog modal-confirm">
                <div class="modal-content">
                    <div class="modal-header">			
                        <h4 class="modal-title">Are you sure?</h4>	
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Do you really want to delete it? This process cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        
        `)
        for (var i=0; i<datadummy.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummy[i].name}</td>
                    <td style="vertical-align: middle">${datadummy[i].location}</td>
                    <td style="vertical-align: middle">${datadummy[i].quantity}</td>
                    <td style="vertical-align: middle">${datadummy[i].status}</td>
                    <td style="vertical-align: middle"> <button id="lockerName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                </tr>
            `).appendTo("#dataLocker")
            $(`#lockerName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name: ${datadummy[0].name}
                    </p>
                    <p>
                        Location: ${datadummy[0].location}
                    </p>
                    <p>
                        Current Quantity: ${datadummy[0].quantity - datadummy[0].subLocker.length}
                    </p>
                    <p>
                        Status: ${datadummy[0].status}
                    </p>
                    <br>
                    <div class="box">
                        <div class="box-header">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="box-title">${datadummy[0].name}</h3>
                                </div>
                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                            <a data-toggle="modal" data-target="#myModal2" class="btn btn-primary" style="background: #01B2BA" href=""> Add Name </a>
                        </div>
                    </div>

                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="lockerType">Locker Type</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="lockerNumber">Locker Number</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="date" >Date</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="start">Start</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="until">Until</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="price" >Price</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="action" >Action</th>
                                </thead>
                                <tbody id="dataSubLocker">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" id="backLocker" class="btn btn-secondary">Back</button>
                    <table data-toggle="table">

                    <div class="modal" id="myModal2">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add Name</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="type"><strong style="color: red;">*</strong> Locker Type</label>
                                <select type="email" class="form-control" id="type" aria-describedby="statushelp" placeholder="Select Type">
                                    <option value="selectType">Select Type</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Daily">Daily</option>
                                </select>   
                            </div>
                            <div class="form-group">
                                <label for="number"><strong style="color: red;">*</strong> Locker Number</label>
                                <input type="text" class="form-control" id="number" placeholder="Locker Number" required>
                            </div>
                            <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="start">Start</label>
                                    <input type="time" class="form-control" id="start" placeholder="Start" required>
                                </div>
                                <div class="form-group">
                                    <label for="until">Until</label>
                                    <input type="time" class="form-control" id="until" placeholder="Until" required>
                                </div>
                            <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>


        <div class="modal" id="myModal3">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Name</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="type"><strong style="color: red;">*</strong> Locker Type</label>
                                <select type="email" class="form-control" id="type" aria-describedby="statushelp" placeholder="Select Type">
                                    <option value="selectType">Select Type</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Daily">Daily</option>
                                </select>   
                            </div>
                            <div class="form-group">
                                <label for="number"><strong style="color: red;">*</strong> Locker Number</label>
                                <input type="text" class="form-control" id="number" placeholder="Locker Number" required>
                            </div>
                            <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="start">Start</label>
                                    <input type="time" class="form-control" id="start" placeholder="Start" required>
                                </div>
                                <div class="form-group">
                                    <label for="until">Until</label>
                                    <input type="time" class="form-control" id="until" placeholder="Until" required>
                                </div>
                            <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


                `)

                for (j=0; j<datadummy[0].subLocker.length; j++) {
                    $(`#dataSubLocker`).append(`
                        <tr>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].name}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].lockerType}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].lockerNumber}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].date}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].start}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].until}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].price}</td>
                            <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal3" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                        </tr>
                    `)
                }
                $('#backLocker').on('click', () => {
                    $("#content-menu").empty()
                    $("#content-menu").append(`
                    <div class="box">
                        <div class="box-header">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="box-title">Rocca's Locker</h3>
                                </div>
                                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                                        <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Locker </a>
                                    </div>
                                </div>
                        </div>
                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="location">Location</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="status" >Status</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                                    </thead>
                                <tbody id="dataLocker">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary">Back</button>
            
                    <table data-toggle="table">
                    <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
            
                                <!-- Modal Header -->
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit Locker Information</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
            
                                <!-- Modal body -->
                                <div class="modal-body">
                                    <form action="/action.php" method="patch">                                
                                        <div class="form-group">
                                            <label for="name"><strong style="color: red;">*</strong> Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="location"><strong style="color: red;">*</strong> Location</label>
                                            <input type="text" class="form-control" id="location" placeholder="Location" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                            <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="status">Status</label>
                                            <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                                <option value="Available">Available</option>
                                                <option value="Unavailable">Unavailable</option>
                                            </select>   
                                        </div>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                                
                                    </form>
                                </div>
            
                            </div>
                        </div>
                    </div>
            
                    <table data-toggle="table">
                    <div class="modal" id="myModal1">
                        <div class="modal-dialog">
                            <div class="modal-content">
            
                                <!-- Modal Header -->
                                <div class="modal-header">
                                    <h4 class="modal-title">Add Locker</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
            
                                <!-- Modal body -->
                                <div class="modal-body">
                                    <form action="/action.php" method="patch">                                
                                        <div class="form-group">
                                            <label for="name"><strong style="color: red;">*</strong> Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="location"><strong style="color: red;">*</strong> Location</label>
                                            <input type="text" class="form-control" id="location" placeholder="Location" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                            <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="status">Status</label>
                                            <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                                <option value="Available">Available</option>
                                                <option value="Unavailable">Unavailable</option>
                                            </select>   
                                        </div>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                
                                    </form>
                                </div>
            
                            </div>
                        </div>
                    </div>
            
                    <!-- Modal (Delete) -->
                    <div id="deletemodal" class="modal fade">
                        <div class="modal-dialog modal-confirm">
                            <div class="modal-content">
                                <div class="modal-header">			
                                    <h4 class="modal-title">Are you sure?</h4>	
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <p>Do you really want to delete it? This process cannot be undone.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    `)
                    for (var i=0; i<datadummy.length; i++) {
                        $(`
                            <tr>
                                <td style="vertical-align: middle">${datadummy[i].name}</td>
                                <td style="vertical-align: middle">${datadummy[i].location}</td>
                                <td style="vertical-align: middle">${datadummy[i].quantity}</td>
                                <td style="vertical-align: middle">${datadummy[i].status}</td>
                                <td style="vertical-align: middle"> <button id="lockerName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                                <td style="vertical-align: middle">
                                <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                    </td>
                            </tr>
                        `).appendTo("#dataLocker")
                        $(`#lockerName${i}`).on('click', function() {
                            $("#content-menu").empty()
                            $("#content-menu").append(`
                                <p>
                                    Name: ${datadummy[0].name}
                                </p>
                                <p>
                                    Location: ${datadummy[0].location}
                                </p>
                                <p>
                                    Current Quantity: ${datadummy[0].quantity - datadummy[0].subLocker.length}
                                </p>
                                <p>
                                    Status: ${datadummy[0].status}
                                </p>
                                <br>
                                <div class="box">
                                    <div class="box-header">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h3 class="box-title">${datadummy[0].name}</h3>
                                            </div>
                                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                                        <a data-toggle="modal" data-target="#myModal2" class="btn btn-primary" style="background: #01B2BA" href=""> Add Name </a>
                                    </div>
                                </div>
            
                                    <div class="box-body">
                                        <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                            <thead>
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="lockerType">Locker Type</th>
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="lockerNumber">Locker Number</th> 
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="date" >Date</th>
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="start">Start</th>
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="until">Until</th>
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="price" >Price</th>
                                                <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="action" >Action</th>
                                            </thead>
                                            <tbody id="dataSubLocker">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <button type="button" id="backLocker" class="btn btn-secondary">Back</button>
                                <table data-toggle="table">
            
                                <div class="modal" id="myModal2">
                        <div class="modal-dialog">
                            <div class="modal-content">
            
                                <!-- Modal Header -->
                                <div class="modal-header">
                                    <h4 class="modal-title">Add Name</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
            
                                <!-- Modal body -->
                                <div class="modal-body">
                                    <form action="/action.php" method="patch">                                
                                        <div class="form-group">
                                            <label for="name"><strong style="color: red;">*</strong> Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="type"><strong style="color: red;">*</strong> Locker Type</label>
                                            <select type="email" class="form-control" id="type" aria-describedby="statushelp" placeholder="Select Type">
                                                <option value="selectType">Select Type</option>
                                                <option value="Hourly">Hourly</option>
                                                <option value="Daily">Daily</option>
                                            </select>   
                                        </div>
                                        <div class="form-group">
                                            <label for="number"><strong style="color: red;">*</strong> Locker Number</label>
                                            <input type="text" class="form-control" id="number" placeholder="Locker Number" required>
                                        </div>
                                        <div class="form-group">
                                                <label for="date"><strong style="color: red;">*</strong> Date</label>
                                                <input type="date" class="form-control" id="date" placeholder="Date" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="start">Start</label>
                                                <input type="time" class="form-control" id="start" placeholder="Start" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="until">Until</label>
                                                <input type="time" class="form-control" id="until" placeholder="Until" required>
                                            </div>
                                        <div class="form-group">
                                                <label for="price">Price</label>
                                                <input type="number" class="form-control" id="price" placeholder="Price" required>
                                            </div>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                
                                    </form>
                                </div>
            
                            </div>
                        </div>
                    </div>
            
            
                    <div class="modal" id="myModal3">
                        <div class="modal-dialog">
                            <div class="modal-content">
            
                                <!-- Modal Header -->
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit Name</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
            
                                <!-- Modal body -->
                                <div class="modal-body">
                                    <form action="/action.php" method="patch">                                
                                        <div class="form-group">
                                            <label for="name"><strong style="color: red;">*</strong> Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="type"><strong style="color: red;">*</strong> Locker Type</label>
                                            <select type="email" class="form-control" id="type" aria-describedby="statushelp" placeholder="Select Type">
                                                <option value="selectType">Select Type</option>
                                                <option value="Hourly">Hourly</option>
                                                <option value="Daily">Daily</option>
                                            </select>   
                                        </div>
                                        <div class="form-group">
                                            <label for="number"><strong style="color: red;">*</strong> Locker Number</label>
                                            <input type="text" class="form-control" id="number" placeholder="Locker Number" required>
                                        </div>
                                        <div class="form-group">
                                                <label for="date"><strong style="color: red;">*</strong> Date</label>
                                                <input type="date" class="form-control" id="date" placeholder="Date" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="start">Start</label>
                                                <input type="time" class="form-control" id="start" placeholder="Start" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="until">Until</label>
                                                <input type="time" class="form-control" id="until" placeholder="Until" required>
                                            </div>
                                        <div class="form-group">
                                                <label for="price">Price</label>
                                                <input type="number" class="form-control" id="price" placeholder="Price" required>
                                            </div>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                
                                    </form>
                                </div>
            
                            </div>
                        </div>
                    </div>
            
                    <!-- Modal (Delete) -->
                            <div id="deletemodal" class="modal fade">
                                <div class="modal-dialog modal-confirm">
                                    <div class="modal-content">
                                        <div class="modal-header">			
                                            <h4 class="modal-title">Are you sure?</h4>	
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Do you really want to delete it? This process cannot be undone.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
            
                            `)
            
                            for (j=0; j<datadummy[0].subLocker.length; j++) {
                                $(`#dataSubLocker`).append(`
                                    <tr>
                                        <td style="vertical-align: middle">${datadummy[0].subLocker[j].name}</td>
                                        <td style="vertical-align: middle">${datadummy[0].subLocker[j].lockerType}</td>
                                        <td style="vertical-align: middle">${datadummy[0].subLocker[j].lockerNumber}</td>
                                        <td style="vertical-align: middle">${datadummy[0].subLocker[j].date}</td>
                                        <td style="vertical-align: middle">${datadummy[0].subLocker[j].start}</td>
                                        <td style="vertical-align: middle">${datadummy[0].subLocker[j].until}</td>
                                        <td style="vertical-align: middle">${datadummy[0].subLocker[j].price}</td>
                                        <td style="vertical-align: middle">
                                <a href="#" data-toggle="modal" data-target="#myModal3" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                    </td>
                                    </tr>
                                `)
                                
                            }

                            $(`#backLocker`).on('click', backbuttonlocker())
                        })
                    }
                })
            })
        }
    }

    $('#locker').on('click', function() {
        $("#content-menu").empty()
        $("#content-menu").append(`
        <div class="box">
            <div class="box-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="box-title">Rocca's Locker</h3>
                    </div>
                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                            <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Locker </a>
                        </div>
                    </div>
            </div>
            <div class="box-body">
                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="location">Location</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="status" >Status</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                    <tbody id="dataLocker">
                    </tbody>
                </table>
            </div>
        </div>

        <table data-toggle="table">
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Locker Information</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="location"><strong style="color: red;">*</strong> Location</label>
                                <input type="text" class="form-control" id="location" placeholder="Location" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <table data-toggle="table">
        <div class="modal" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add Locker</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="location"><strong style="color: red;">*</strong> Location</label>
                                <input type="text" class="form-control" id="location" placeholder="Location" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
        <div id="deletemodal" class="modal fade">
            <div class="modal-dialog modal-confirm">
                <div class="modal-content">
                    <div class="modal-header">			
                        <h4 class="modal-title">Are you sure?</h4>	
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Do you really want to delete it? This process cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        
        `)
        for (var i=0; i<datadummy.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummy[i].name}</td>
                    <td style="vertical-align: middle">${datadummy[i].location}</td>
                    <td style="vertical-align: middle">${datadummy[i].quantity}</td>
                    <td style="vertical-align: middle">${datadummy[i].status}</td>
                    <td style="vertical-align: middle"> <button id="lockerName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                </tr>
            `).appendTo("#dataLocker")
            $(`#lockerName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name: ${datadummy[0].name}
                    </p>
                    <p>
                        Location: ${datadummy[0].location}
                    </p>
                    <p>
                        Current Quantity: ${datadummy[0].quantity - datadummy[0].subLocker.length}
                    </p>
                    <p>
                        Status: ${datadummy[0].status}
                    </p>
                    <br>
                    <div class="box">
                        <div class="box-header">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="box-title">${datadummy[0].name}</h3>
                                </div>
                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                            <a data-toggle="modal" data-target="#myModal2" class="btn btn-primary" style="background: #01B2BA" href=""> Add Name </a>
                        </div>
                    </div>

                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="lockerType">Locker Type</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="lockerNumber">Locker Number</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="date" >Date</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="start">Start</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="until">Until</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="price" >Price</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="action" >Action</th>
                                </thead>
                                <tbody id="dataSubLocker">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" id="backLocker" class="btn btn-secondary">Back</button>
                    <table data-toggle="table">

                    <div class="modal" id="myModal2">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add Name</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="type"><strong style="color: red;">*</strong> Locker Type</label>
                                <select type="email" class="form-control" id="type" aria-describedby="statushelp" placeholder="Select Type">
                                    <option value="selectType">Select Type</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Daily">Daily</option>
                                </select>   
                            </div>
                            <div class="form-group">
                                <label for="number"><strong style="color: red;">*</strong> Locker Number</label>
                                <input type="text" class="form-control" id="number" placeholder="Locker Number" required>
                            </div>
                            <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="start">Start</label>
                                    <input type="time" class="form-control" id="start" placeholder="Start" required>
                                </div>
                                <div class="form-group">
                                    <label for="until">Until</label>
                                    <input type="time" class="form-control" id="until" placeholder="Until" required>
                                </div>
                            <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>


        <div class="modal" id="myModal3">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Name</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="type"><strong style="color: red;">*</strong> Locker Type</label>
                                <select type="email" class="form-control" id="type" aria-describedby="statushelp" placeholder="Select Type">
                                    <option value="selectType">Select Type</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Daily">Daily</option>
                                </select>   
                            </div>
                            <div class="form-group">
                                <label for="number"><strong style="color: red;">*</strong> Locker Number</label>
                                <input type="text" class="form-control" id="number" placeholder="Locker Number" required>
                            </div>
                            <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                                </div>
                                <div class="form-group">
                                    <label for="start">Start</label>
                                    <input type="time" class="form-control" id="start" placeholder="Start" required>
                                </div>
                                <div class="form-group">
                                    <label for="until">Until</label>
                                    <input type="time" class="form-control" id="until" placeholder="Until" required>
                                </div>
                            <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" placeholder="Price" required>
                                </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


                `)

                for (j=0; j<datadummy[0].subLocker.length; j++) {
                    $(`#dataSubLocker`).append(`
                        <tr>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].name}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].lockerType}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].lockerNumber}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].date}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].start}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].until}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].price}</td>
                            <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal3" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                        </tr>
                    `)
                }
                $('#backLocker').on('click', backbuttonlocker())
            })
        }
    })
    
    function backbuttonrefreshment() {
        $("#content-menu").empty()
        $("#content-menu").append(`
        <div class="box">
            <div class="box-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="box-title">Rocca's Refreshment</h3>
                    </div>
                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                    <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Refreshment </a>
                </div>
            </div>
            <div class="box-body">
                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th>  
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="status" >Status</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Action"> Action</th>
                    </thead>
                    <tbody id="dataRefreshment">
                    </tbody>
                </table>
            </div>
        </div>
        <table data-toggle="table">
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Refreshment Information</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder=" Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background:  #01B2BA !important;">Update</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add Refreshment</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


        `)
        for (var i=0; i<datadummy2.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummy2[i].name}</td>
                    <td style="vertical-align: middle">${datadummy2[i].quantity}</td>
                    <td style="vertical-align: middle">${datadummy2[i].status}</td>
                    <td style="vertical-align: middle"> <button id="refreshmentName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: " data-toggle="modal" id="deleteRefreshment${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                </tr>
            `).appendTo("#dataRefreshment")
            $(`#refreshmentName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name: ${datadummy2[0].name}
                    </p>
                    <p>
                        Current Quantity: ${datadummy2[0].quantity - datadummy2[0].subRefreshment.length}
                    </p>
                    <p>
                        Status: ${datadummy2[0].status}
                    </p>
                    <br>
                    <div class="box">
                        <div class="box-header">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="box-title">${datadummy2[0].name}</h3>
                                </div>
                                <div class="col-mr-" style="position: absolute; right: 22px !important">
                                <a data-toggle="modal" data-target="#myModal2" class="btn btn-primary" style="background: #01B2BA" href=""> Add </a>
                            </div>
                        </div>
                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="date">Date</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="time">Time</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="price" >Price</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="action" >Action</th>
                                </thead>
                                <tbody id="dataSubRefreshment">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary" id="backrefreshment">Back</button>
                    <table data-toggle="table">

                    <div class="modal" id="myModal2">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                        <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                        <label for="date"><strong style="color: red;">*</strong> Date</label>
                        <input type="date" class="form-control" id="date" placeholder="Date" required>
                    </div>
                          <div class="form-group">
                          <label for="start">Time</label>
                          <input type="time" class="form-control" id="start" placeholder="Time" required>
                     </div>
                         <div class="form-group">
                         <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                         <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                     </div>
                     <div class="form-group">
                         <label for="price">Price</label>
                          <input type="number" class="form-control" id="price" placeholder="Price" required>
                        </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal" id="myModal3">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                        <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                        <label for="date"><strong style="color: red;">*</strong> Date</label>
                        <input type="date" class="form-control" id="date" placeholder="Date" required>
                    </div>
                          <div class="form-group">
                          <label for="start">Time</label>
                          <input type="time" class="form-control" id="start" placeholder="Time" required>
                     </div>
                         <div class="form-group">
                         <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                         <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                     </div>
                     <div class="form-group">
                         <label for="price">Price</label>
                          <input type="number" class="form-control" id="price" placeholder="Price" required>
                        </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
        <div id="deletemodal" class="modal fade">
            <div class="modal-dialog modal-confirm">
                <div class="modal-content">
                    <div class="modal-header">			
                        <h4 class="modal-title">Are you sure?</h4>	
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Do you really want to delete it? This process cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
                `)

                for (j=0; j<datadummy2[0].subRefreshment.length; j++) {
                    $(`#dataSubRefreshment`).append(`
                        <tr>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].name}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].date}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].time}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].quantity}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].price}</td>
                            <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal3" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                        </tr>
                    `)
                }

                $('#backrefreshment').on('click', function() {
                        $("#content-menu").empty()
                        $("#content-menu").append(`
                        <div class="box">
                            <div class="box-header">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="box-title">Rocca's Refreshment</h3>
                                    </div>
                                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                                    <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Refreshment </a>
                                </div>
                            </div>
                            <div class="box-body">
                                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                    <thead>
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th>  
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="status" >Status</th>
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Action"> Action</th>
                                    </thead>
                                    <tbody id="dataRefreshment">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <table data-toggle="table">
                        <div class="modal" id="myModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                
                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title">Edit Refreshment Information</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                
                                    <!-- Modal body -->
                                    <div class="modal-body">
                                        <form action="/action.php" method="patch">                                
                                            <div class="form-group">
                                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                                <input type="number" class="form-control" id="quantity" placeholder=" Quantity" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="status">Status</label>
                                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                                    <option value="Available">Available</option>
                                                    <option value="Unavailable">Unavailable</option>
                                                </select>   
                                            </div>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background:  #01B2BA !important;">Update</button>
                                    
                                        </form>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                
                        <div class="modal" id="myModal1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                
                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add Refreshment</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                
                                    <!-- Modal body -->
                                    <div class="modal-body">
                                        <form action="/action.php" method="patch">                                
                                            <div class="form-group">
                                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                                <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="status">Status</label>
                                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                                    <option value="Available">Available</option>
                                                    <option value="Unavailable">Unavailable</option>
                                                </select>   
                                            </div>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                    
                                        </form>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                
                        <!-- Modal (Delete) -->
                                <div id="deletemodal" class="modal fade">
                                    <div class="modal-dialog modal-confirm">
                                        <div class="modal-content">
                                            <div class="modal-header">			
                                                <h4 class="modal-title">Are you sure?</h4>	
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Do you really want to delete it? This process cannot be undone.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                
                        `)
                        for (var i=0; i<datadummy2.length; i++) {
                            $(`
                                <tr>
                                    <td style="vertical-align: middle">${datadummy2[i].name}</td>
                                    <td style="vertical-align: middle">${datadummy2[i].quantity}</td>
                                    <td style="vertical-align: middle">${datadummy2[i].status}</td>
                                    <td style="vertical-align: middle"> <button id="refreshmentName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                                    <td style="vertical-align: middle">
                                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: " data-toggle="modal" id="deleteRefreshment${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                        </td>
                                </tr>
                            `).appendTo("#dataRefreshment")
                            $(`#refreshmentName${i}`).on('click', function() {
                                $("#content-menu").empty()
                                $("#content-menu").append(`
                                    <p>
                                        Name: ${datadummy2[0].name}
                                    </p>
                                    <p>
                                        Current Quantity: ${datadummy2[0].quantity - datadummy2[0].subRefreshment.length}
                                    </p>
                                    <p>
                                        Status: ${datadummy2[0].status}
                                    </p>
                                    <br>
                                    <div class="box">
                                        <div class="box-header">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h3 class="box-title">${datadummy2[0].name}</h3>
                                                </div>
                                                <div class="col-mr-" style="position: absolute; right: 22px !important">
                                                <a data-toggle="modal" data-target="#myModal2" class="btn btn-primary" style="background: #01B2BA" href=""> Add </a>
                                            </div>
                                        </div>
                                        <div class="box-body">
                                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                                <thead>
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th>
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="date">Date</th> 
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="time">Time</th> 
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="price" >Price</th>
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="action" >Action</th>
                                                </thead>
                                                <tbody id="dataSubRefreshment">
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-secondary" id="backrefreshment">Back</button>
                                    <table data-toggle="table">
                
                                    <div class="modal" id="myModal2">
                            <div class="modal-dialog">
                                <div class="modal-content">
                
                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                
                                    <!-- Modal body -->
                                    <div class="modal-body">
                                        <form action="/action.php" method="patch">                                
                                        <div class="form-group">
                                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                                            </div>
                                            <div class="form-group">
                                        <label for="date"><strong style="color: red;">*</strong> Date</label>
                                        <input type="date" class="form-control" id="date" placeholder="Date" required>
                                    </div>
                                          <div class="form-group">
                                          <label for="start">Time</label>
                                          <input type="time" class="form-control" id="start" placeholder="Time" required>
                                     </div>
                                         <div class="form-group">
                                         <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                         <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                                     </div>
                                     <div class="form-group">
                                         <label for="price">Price</label>
                                          <input type="number" class="form-control" id="price" placeholder="Price" required>
                                        </div>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                    
                                        </form>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                
                        <div class="modal" id="myModal3">
                            <div class="modal-dialog">
                                <div class="modal-content">
                
                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title">Edit</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                
                                    <!-- Modal body -->
                                    <div class="modal-body">
                                        <form action="/action.php" method="patch">                                
                                        <div class="form-group">
                                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                                            </div>
                                            <div class="form-group">
                                        <label for="date"><strong style="color: red;">*</strong> Date</label>
                                        <input type="date" class="form-control" id="date" placeholder="Date" required>
                                    </div>
                                          <div class="form-group">
                                          <label for="start">Time</label>
                                          <input type="time" class="form-control" id="start" placeholder="Time" required>
                                     </div>
                                         <div class="form-group">
                                         <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                         <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                                     </div>
                                     <div class="form-group">
                                         <label for="price">Price</label>
                                          <input type="number" class="form-control" id="price" placeholder="Price" required>
                                        </div>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                    
                                        </form>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                
                        <!-- Modal (Delete) -->
                        <div id="deletemodal" class="modal fade">
                            <div class="modal-dialog modal-confirm">
                                <div class="modal-content">
                                    <div class="modal-header">			
                                        <h4 class="modal-title">Are you sure?</h4>	
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Do you really want to delete it? This process cannot be undone.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                                `)
                
                                for (j=0; j<datadummy2[0].subRefreshment.length; j++) {
                                    $(`#dataSubRefreshment`).append(`
                                        <tr>
                                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].name}</td>
                                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].date}</td>
                                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].time}</td>
                                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].quantity}</td>
                                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].price}</td>
                                            <td style="vertical-align: middle">
                                    <a href="#" data-toggle="modal" data-target="#myModal3" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                        </td>
                                        </tr>
                                    `)
                                }
                
                                $('#backrefreshment').on('click', backbuttonrefreshment())
                            })
                        }
                })
            })
        }
    }

    $('#refreshment').on('click', function() {
        $("#content-menu").empty()
        $("#content-menu").append(`
        <div class="box">
            <div class="box-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="box-title">Rocca's Refreshment</h3>
                    </div>
                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                    <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Refreshment </a>
                </div>
            </div>
            <div class="box-body">
                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th>  
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="status" >Status</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Action"> Action</th>
                    </thead>
                    <tbody id="dataRefreshment">
                    </tbody>
                </table>
            </div>
        </div>
        <table data-toggle="table">
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Refreshment Information</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder=" Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background:  #01B2BA !important;">Update</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add Refreshment</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                            <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                                <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select type="email" class="form-control" id="status" aria-describedby="statushelp" placeholder="Select status">
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>   
                            </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


        `)
        for (var i=0; i<datadummy2.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummy2[i].name}</td>
                    <td style="vertical-align: middle">${datadummy2[i].quantity}</td>
                    <td style="vertical-align: middle">${datadummy2[i].status}</td>
                    <td style="vertical-align: middle"> <button id="refreshmentName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: " data-toggle="modal" id="deleteRefreshment${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                </tr>
            `).appendTo("#dataRefreshment")
            $(`#refreshmentName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name: ${datadummy2[0].name}
                    </p>
                    <p>
                        Current Quantity: ${datadummy2[0].quantity - datadummy2[0].subRefreshment.length}
                    </p>
                    <p>
                        Status: ${datadummy2[0].status}
                    </p>
                    <br>
                    <div class="box">
                        <div class="box-header">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="box-title">${datadummy2[0].name}</h3>
                                </div>
                                <div class="col-mr-" style="position: absolute; right: 22px !important">
                                <a data-toggle="modal" data-target="#myModal2" class="btn btn-primary" style="background: #01B2BA" href=""> Add </a>
                            </div>
                        </div>
                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="date">Date</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="time">Time</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="quantity" >Quantity</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="price" >Price</th>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="action" >Action</th>
                                </thead>
                                <tbody id="dataSubRefreshment">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary" id="backrefreshment">Back</button>
                    <table data-toggle="table">

                    <div class="modal" id="myModal2">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                        <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                        <label for="date"><strong style="color: red;">*</strong> Date</label>
                        <input type="date" class="form-control" id="date" placeholder="Date" required>
                    </div>
                          <div class="form-group">
                          <label for="start">Time</label>
                          <input type="time" class="form-control" id="start" placeholder="Time" required>
                     </div>
                         <div class="form-group">
                         <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                         <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                     </div>
                     <div class="form-group">
                         <label for="price">Price</label>
                          <input type="number" class="form-control" id="price" placeholder="Price" required>
                        </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal" id="myModal3">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="/action.php" method="patch">                                
                        <div class="form-group">
                                <label for="name"><strong style="color: red;">*</strong> Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                        <label for="date"><strong style="color: red;">*</strong> Date</label>
                        <input type="date" class="form-control" id="date" placeholder="Date" required>
                    </div>
                          <div class="form-group">
                          <label for="start">Time</label>
                          <input type="time" class="form-control" id="start" placeholder="Time" required>
                     </div>
                         <div class="form-group">
                         <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                         <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                     </div>
                     <div class="form-group">
                         <label for="price">Price</label>
                          <input type="number" class="form-control" id="price" placeholder="Price" required>
                        </div>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                    
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal (Delete) -->
        <div id="deletemodal" class="modal fade">
            <div class="modal-dialog modal-confirm">
                <div class="modal-content">
                    <div class="modal-header">			
                        <h4 class="modal-title">Are you sure?</h4>	
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Do you really want to delete it? This process cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
                `)

                for (j=0; j<datadummy2[0].subRefreshment.length; j++) {
                    $(`#dataSubRefreshment`).append(`
                        <tr>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].name}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].date}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].time}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].quantity}</td>
                            <td style="vertical-align: middle">${datadummy2[0].subRefreshment[j].price}</td>
                            <td style="vertical-align: middle">
                    <a href="#" data-toggle="modal" data-target="#myModal3" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color:  #01B2BA" data-toggle="modal" id="deleteLocker${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                        </tr>
                    `)
                }

                $('#backrefreshment').on('click', backbuttonrefreshment())
            })
        }
    })

    $('#shower').on('click', function() {
        $("#content-menu").empty()
        obj = [
            {
                name: "ELvia Nur Anggraini",
                location: "Shower A11",
                date: "Tuesday, 18-06-2019",
                start_until: "07:30 PM - 08:30 PM",
                quantity: 1,
                price: "Rp 50.000"
            }
        ]
        $("#content-menu").append(`
        <div class="box">
        <div class="box-header">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="box-title">Rocca's Shower</h3>
                </div>
                <div class="col-mr-" style="position: absolute; right: 22px !important">
                <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Shower </a>
            </div>
                    </div>
        </div>
        <div class="box-body">
            <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Name">Name</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Location"> Location</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start - Until</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Quantity" > Quantity</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>${obj[0].name}</td>
                        <td>${obj[0].location}</td>
                        <td>${obj[0].date}</td>
                        <td>${obj[0].start_until}</td>
                        <td>${obj[0].quantity}</td>
                        <td>${obj[0].price}</td>
                        <td>
                                <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteShower"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <table data-toggle="table">
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Edit Shower Information</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form action="/action.php" method="patch">                                
                        <div class="form-group">
                            <label for="name"><strong style="color: red;">*</strong> Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <label for="location"><strong style="color: red;">*</strong> Location</label>
                            <input type="text" class="form-control" id="location" placeholder="Location" required>
                        </div>
                        <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                        </div>
                        <div class="form-group">
                                    <label for="beginningTime">Beginning Time</label>
                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                        </div>
                        <div class="form-group">
                                    <label for="finishingTime">Finishing Time</label>
                                    <input type="time" class="form-control" id="finishingTime" placeholder=" Finishing Time" required>
                        </div>
                        <div class="form-group">
                            <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                            <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" id="price" placeholder="Price" required>
                        </div>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                
                    </form>
                </div>

            </div>
        </div>
    </div>

    <div class="modal" id="myModal1">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Add Shower</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form action="/action.php" method="patch">                                
                        <div class="form-group">
                            <label for="name"><strong style="color: red;">*</strong> Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <label for="location"><strong style="color: red;">*</strong> Location</label>
                            <input type="text" class="form-control" id="location" placeholder="Location" required>
                        </div>
                        <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="Date" required>
                        </div>
                        <div class="form-group">
                                    <label for="beginningTime">Beginning Time</label>
                                    <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                        </div>
                        <div class="form-group">
                                    <label for="finishingTime">Finishing Time</label>
                                    <input type="time" class="form-control" id="finishingTime" placeholder=" Finishing Time" required>
                        </div>
                        <div class="form-group">
                            <label for="quantity"><strong style="color: red;">*</strong> Quantity</label>
                            <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" id="price" placeholder="Price" required>
                        </div>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                
                    </form>
                </div>

            </div>
        </div>
    </div>

    <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


    `)
    })

    $('#space').on('click', function() {
        $("#content-menu").empty()
        obj = [
            {
                name: "ELvia Nur Anggraini",
                location: "Ruang A123",
                date: "Wednesday, 19-06-2019",
                start_until: "07:30 PM - 09:30 PM",
                quota: "5 persons",
                price: "Rp. 150.000"
            }
        ]
        $("#content-menu").append(`
        <div class="box">
        <div class="box-header">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="box-title">Rocca's Space</h3>
                </div>
                <div class="col-mr-" style="position: absolute; right: 22px !important">
                <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Space </a>
            </div>
            </div>
        </div>
        <div class="box-body">
            <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Name">Name</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Location"> Location</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start - Until</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Quota" > Quota</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>${obj[0].name}</td>
                        <td>${obj[0].location}</td>
                        <td>${obj[0].date}</td>
                        <td>${obj[0].start_until}</td>
                        <td>${obj[0].quota}</td>
                        <td>${obj[0].price}</td>
                        <td>
                                <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteSpace"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <table data-toggle="table">
    <div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Edit Space Information</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form action="/action.php" method="patch">                                
                    <div class="form-group">
                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                        <label for="location"><strong style="color: red;">*</strong> Location</label>
                        <input type="text" class="form-control" id="location" placeholder="Location" required>
                    </div>
                    <div class="form-group">
                                <label for="date"><strong style="color: red;">*</strong> Date</label>
                                <input type="date" class="form-control" id="date" placeholder="Date" required>
                    </div>
                    <div class="form-group">
                                <label for="beginningTime">Beginning Time</label>
                                <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                    </div>
                    <div class="form-group">
                                <label for="finishingTime">Finishing Time</label>
                                <input type="time" class="form-control" id="finishingTime" placeholder=" Finishing Time" required>
                    </div>
                    <div class="form-group">
                        <label for="quantity"><strong style="color: red;">*</strong> Quota</label>
                        <input type="number" class="form-control" id="quantity" placeholder="Quota" required>
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" class="form-control" id="price" placeholder="Price" required>
                    </div>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
            
                </form>
            </div>

        </div>
    </div>
</div>

<div class="modal" id="myModal1">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Add Space</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form action="/action.php" method="patch">                                
                    <div class="form-group">
                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                        <label for="location"><strong style="color: red;">*</strong> Location</label>
                        <input type="text" class="form-control" id="location" placeholder="Location" required>
                    </div>
                    <div class="form-group">
                                <label for="date"><strong style="color: red;">*</strong> Date</label>
                                <input type="date" class="form-control" id="date" placeholder="Date" required>
                    </div>
                    <div class="form-group">
                                <label for="beginningTime">Beginning Time</label>
                                <input type="time" class="form-control" id="beginningTime" placeholder="Beginning Time" required>
                    </div>
                    <div class="form-group">
                                <label for="finishingTime">Finishing Time</label>
                                <input type="time" class="form-control" id="finishingTime" placeholder=" Finishing Time" required>
                    </div>
                    <div class="form-group">
                        <label for="quantity"><strong style="color: red;">*</strong> Quota</label>
                        <input type="number" class="form-control" id="quantity" placeholder="Quota" required>
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" class="form-control" id="price" placeholder="Price" required>
                    </div>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
            
                </form>
            </div>

        </div>
    </div>
</div>

<!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

        `)
    })

    $('#specialization').on('click', function() {
        $("#content-menu").empty()
        obj = [
            {
                name: "Makan makan",
                description: "Intinya banyak makan"
            }
        ]
        $("#content-menu").append(`
        <div class="box">
        <div class="box-header">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="box-title">Rocca's Specialization</h3>
                </div>
                <div class="col-mr-" style="position: absolute; right: 22px !important">
                <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Specialization </a>
            </div>
                    </div>
        </div>
        <div class="box-body">
            <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Name">Name</th> 
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Description"> Description</th>
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>${obj[0].name}</td>
                        <td>${obj[0].description}</td>
                        <td>
                        <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteSpecialization"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                    </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <table data-toggle="table">
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Edit Specialization</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form action="/action.php" method="patch">                                
                        <div class="form-group">
                            <label for="name"><strong style="color: red;">*</strong> Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                                    <label for="description"> Description:</label>
                                    <textarea class="form-control" rows="5" id="description"></textarea>
                        </div>
                        
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                
                    </form>
                </div>

            </div>
        </div>
    </div>

    <div class="modal" id="myModal1">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Add Specialization</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form action="/action.php" method="patch">                                
                    <div class="form-group">
                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                                <label for="description"> Description:</label>
                                <textarea class="form-control" rows="5" id="description"></textarea>
                    </div>
                    
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
            
                </form>
            </div>

        </div>
    </div>
</div>

<!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

        `)
    })

    function backbuttontrainer() {
        $("#content-menu").empty()
        $("#content-menu").append(`
        <div class="box">
            <div class="box-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="box-title">Rocca's Trainer</h3>
                    </div>
                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                    <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Trainer </a>
                </div>
                    </div>
            </div>
            <div class="box-body">
                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="phone">Phone</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="gender" >Gender</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                    <tbody id="dataTrainer">
                    </tbody>
                </table>
            </div>
        </div>

        <table data-toggle="table">
                    <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
    
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Trainer Information</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
    
                            <!-- Modal body -->
                            <div class="modal-body">
                                <form action="/action.php" method="patch">
                                    <div class="form-group">
                                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="price"><strong style="color: red;">*</strong> Phone</label>
                                        <input type="number" class="form-control" id="price" placeholder="Phone" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="sportGender">Gender</label>
                                        <select type="email" class="form-control" id="sportGender" aria-describedby="categorylHelp" placeholder="Select Gender">
                                            <option value="selectGender">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="description"> Description:</label>
                                        <textarea class="form-control" rows="5" id="description"></textarea>
                                    </div>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal" id="myModal1">
                    <div class="modal-dialog">
                        <div class="modal-content">
    
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Add Trainer</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
    
                            <!-- Modal body -->
                            <div class="modal-body">
                                <form action="/action.php" method="patch">
                                    <div class="form-group">
                                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="price"><strong style="color: red;">*</strong> Phone</label>
                                        <input type="number" class="form-control" id="price" placeholder="Phone" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="sportGender">Gender</label>
                                        <select type="email" class="form-control" id="sportGender" aria-describedby="categorylHelp" placeholder="Select Gender">
                                            <option value="selectGender">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="description"> Description:</label>
                                        <textarea class="form-control" rows="5" id="description"></textarea>
                                    </div>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>  

        `)
        for (var i=0; i<datadummy3.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummy3[i].name}</td>
                    <td style="vertical-align: middle">${datadummy3[i].phone}</td>
                    <td style="vertical-align: middle">${datadummy3[i].gender}</td>
                    <td style="vertical-align: middle"> <button id="trainerName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                        <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteTrainer${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                    </td>
                </tr>
            `).appendTo("#dataTrainer")
            $(`#trainerName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name: ${datadummy3[0].name}
                    </p>
                    <p>
                        Phone: ${datadummy3[0].phone}
                    </p>
                    <p>
                        Gender: ${datadummy3[0].gender}
                    </p>
                    <p>
                        Description: ${datadummy3[0].description}
                    </p>
                    <br>
                    <div class="box">
                        <div class="box-header">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="box-title">Specialization and Rate</h3>
                                </div>
                            </div>
                        </div>
                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="specialization">Specialization</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="initial_rate">Initial Rate</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="user_rate" >User Average Rate</th>
                                </thead>
                                <tbody id="dataSubTrainer">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary" id="backtrainer">Back</button>

                `)
                $('#backtrainer').on('click', function() {
                        $("#content-menu").empty()
                        $("#content-menu").append(`
                        <div class="box">
                            <div class="box-header">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="box-title">Rocca's Trainer</h3>
                                    </div>
                                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                                    <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Trainer </a>
                                </div>
                                    </div>
                            </div>
                            <div class="box-body">
                                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                    <thead>
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="phone">Phone</th> 
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="gender" >Gender</th>
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                                        <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                                        </thead>
                                    <tbody id="dataTrainer">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                
                        <table data-toggle="table">
                                    <div class="modal" id="myModal">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                    
                                            <!-- Modal Header -->
                                            <div class="modal-header">
                                                <h4 class="modal-title">Edit Trainer Information</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>
                    
                                            <!-- Modal body -->
                                            <div class="modal-body">
                                                <form action="/action.php" method="patch">
                                                    <div class="form-group">
                                                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="price"><strong style="color: red;">*</strong> Phone</label>
                                                        <input type="number" class="form-control" id="price" placeholder="Phone" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="sportGender">Gender</label>
                                                        <select type="email" class="form-control" id="sportGender" aria-describedby="categorylHelp" placeholder="Select Gender">
                                                            <option value="selectGender">Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="description"> Description:</label>
                                                        <textarea class="form-control" rows="5" id="description"></textarea>
                                                    </div>
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                                            
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <div class="modal" id="myModal1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                    
                                            <!-- Modal Header -->
                                            <div class="modal-header">
                                                <h4 class="modal-title">Add Trainer</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>
                    
                                            <!-- Modal body -->
                                            <div class="modal-body">
                                                <form action="/action.php" method="patch">
                                                    <div class="form-group">
                                                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                                                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="price"><strong style="color: red;">*</strong> Phone</label>
                                                        <input type="number" class="form-control" id="price" placeholder="Phone" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="sportGender">Gender</label>
                                                        <select type="email" class="form-control" id="sportGender" aria-describedby="categorylHelp" placeholder="Select Gender">
                                                            <option value="selectGender">Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="description"> Description:</label>
                                                        <textarea class="form-control" rows="5" id="description"></textarea>
                                                    </div>
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                                            
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <!-- Modal (Delete) -->
                                <div id="deletemodal" class="modal fade">
                                    <div class="modal-dialog modal-confirm">
                                        <div class="modal-content">
                                            <div class="modal-header">			
                                                <h4 class="modal-title">Are you sure?</h4>	
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Do you really want to delete it? This process cannot be undone.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                
                        `)
                        for (var i=0; i<datadummy3.length; i++) {
                            $(`
                                <tr>
                                    <td style="vertical-align: middle">${datadummy3[i].name}</td>
                                    <td style="vertical-align: middle">${datadummy3[i].phone}</td>
                                    <td style="vertical-align: middle">${datadummy3[i].gender}</td>
                                    <td style="vertical-align: middle"> <button id="trainerName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                                    <td style="vertical-align: middle">
                                        <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteTrainer${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                    </td>
                                </tr>
                            `).appendTo("#dataTrainer")
                            $(`#trainerName${i}`).on('click', function() {
                                $("#content-menu").empty()
                                $("#content-menu").append(`
                                    <p>
                                        Name: ${datadummy3[0].name}
                                    </p>
                                    <p>
                                        Phone: ${datadummy3[0].phone}
                                    </p>
                                    <p>
                                        Gender: ${datadummy3[0].gender}
                                    </p>
                                    <p>
                                        Description: ${datadummy3[0].description}
                                    </p>
                                    <br>
                                    <div class="box">
                                        <div class="box-header">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h3 class="box-title">Specialization and Rate</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-body">
                                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                                <thead>
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="specialization">Specialization</th> 
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="initial_rate">Initial Rate</th> 
                                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="user_rate" >User Average Rate</th>
                                                </thead>
                                                <tbody id="dataSubTrainer">
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-secondary" id="backtrainer">Back</button>
                
                                `)
                                $('#backtrainer').on('click', backbuttontrainer())
                
                                for (j=0; j<datadummy3[0].subTrainer.length; j++) {
                                    $(`#dataSubTrainer`).append(`
                                        <tr>
                                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].specialization}</td>
                                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].initial_rate}</td>
                                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].user_rate}</td>
                                        </tr>
                                    `)
                                }
                            })   
                        }
                })
                for (j=0; j<datadummy3[0].subTrainer.length; j++) {
                    $(`#dataSubTrainer`).append(`
                        <tr>
                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].specialization}</td>
                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].initial_rate}</td>
                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].user_rate}</td>
                        </tr>
                    `)
                }
            })
            
        }

    }

    $('#trainer').on('click', function() {
        $("#content-menu").empty()
        $("#content-menu").append(`
        <div class="box">
            <div class="box-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="box-title">Rocca's Trainer</h3>
                    </div>
                    <div class="col-mr-" style="position: absolute; right: 22px !important">
                    <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add Trainer </a>
                </div>
                    </div>
            </div>
            <div class="box-body">
                <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="phone">Phone</th> 
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="gender" >Gender</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="detail" >Detail</th>
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                    <tbody id="dataTrainer">
                    </tbody>
                </table>
            </div>
        </div>

        <table data-toggle="table">
                    <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
    
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Trainer Information</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
    
                            <!-- Modal body -->
                            <div class="modal-body">
                                <form action="/action.php" method="patch">
                                    <div class="form-group">
                                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="price"><strong style="color: red;">*</strong> Phone</label>
                                        <input type="number" class="form-control" id="price" placeholder="Phone" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="sportGender">Gender</label>
                                        <select type="email" class="form-control" id="sportGender" aria-describedby="categorylHelp" placeholder="Select Gender">
                                            <option value="selectGender">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="description"> Description:</label>
                                        <textarea class="form-control" rows="5" id="description"></textarea>
                                    </div>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal" id="myModal1">
                    <div class="modal-dialog">
                        <div class="modal-content">
    
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Add Trainer</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
    
                            <!-- Modal body -->
                            <div class="modal-body">
                                <form action="/action.php" method="patch">
                                    <div class="form-group">
                                        <label for="name"><strong style="color: red;">*</strong> Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="price"><strong style="color: red;">*</strong> Phone</label>
                                        <input type="number" class="form-control" id="price" placeholder="Phone" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="sportGender">Gender</label>
                                        <select type="email" class="form-control" id="sportGender" aria-describedby="categorylHelp" placeholder="Select Gender">
                                            <option value="selectGender">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="description"> Description:</label>
                                        <textarea class="form-control" rows="5" id="description"></textarea>
                                    </div>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>  

        `)
        for (var i=0; i<datadummy3.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummy3[i].name}</td>
                    <td style="vertical-align: middle">${datadummy3[i].phone}</td>
                    <td style="vertical-align: middle">${datadummy3[i].gender}</td>
                    <td style="vertical-align: middle"> <button id="trainerName${i}" class="btn btn-link" style="color: #01B2BA !important; text-decoration: none">Show</button></td>
                    <td style="vertical-align: middle">
                        <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteTrainer${i}"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                    </td>
                </tr>
            `).appendTo("#dataTrainer")
            $(`#trainerName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name: ${datadummy3[0].name}
                    </p>
                    <p>
                        Phone: ${datadummy3[0].phone}
                    </p>
                    <p>
                        Gender: ${datadummy3[0].gender}
                    </p>
                    <p>
                        Description: ${datadummy3[0].description}
                    </p>
                    <br>
                    <div class="box">
                        <div class="box-header">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="box-title">Specialization and Rate</h3>
                                </div>
                            </div>
                        </div>
                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="specialization">Specialization</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="initial_rate">Initial Rate</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="user_rate" >User Average Rate</th>
                                </thead>
                                <tbody id="dataSubTrainer">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary" id="backtrainer">Back</button>

                `)
                $('#backtrainer').on('click', backbuttontrainer())

                for (j=0; j<datadummy3[0].subTrainer.length; j++) {
                    $(`#dataSubTrainer`).append(`
                        <tr>
                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].specialization}</td>
                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].initial_rate}</td>
                            <td style="vertical-align: middle">${datadummy3[0].subTrainer[j].user_rate}</td>
                        </tr>
                    `)
                }
            })
            
        }

    })

    $("#user-management").on('click', function() { 
        $("#content-menu").empty()
        $("#content-menu").append(`
            <div class="box">
                <div class="box-header">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="box-title">Rocca's User</h3>
                        </div>
                        <div class="col-mr-" style="position: absolute; right: 22px !important">
                        <a data-toggle="modal" data-target="#myModal1" class="btn btn-primary" style="background: #01B2BA" href=""> Add User </a>
                    </div>
                    </div>
                </div>
                <div class="box-body">
                    <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Name"> Name</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Address"> Address</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Phone" > Phone</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Email" > Email</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Luthfiyahh</a></td>
                                <td>Jl Antapani Bandung</td>
                                <td>0895344354454</td>
                                <td>luthfiyah@gmail.com</td>
                                <td>
                                <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteUser"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                            </td>
                            </tr>
                            <tr>
                                <td>Luthfiyahh</a></td>
                                <td>Jl Antapani Bandung</td>
                                <td>0895344354454</td>
                                <td>luthfiyah@gmail.com</td>
                                <td>
                                <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteUser"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                            </td>
                            </tr>
                            <tr>
                                <td>Luthfiyahh</a></td>
                                <td>Jl Antapani Bandung</td>
                                <td>0895344354454</td>
                                <td>luthfiyah@gmail.com</td>
                                <td>
                                <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteUser"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                            </td>
                            </tr>
                            <tr>
                                <td>Luthfiyahh</a></td>
                                <td>Jl Antapani Bandung</td>
                                <td>0895344354454</td>
                                <td>luthfiyah@gmail.com</td>
                                <td>
                                <a href="#" data-toggle="modal" data-target="#myModal" style="color: #01B2BA !important; text-decoration: none;"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a href="#deletemodal" style="text-decoration: none; color: #01B2BA" data-toggle="modal" id="deleteUser"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                            </td>
                            </tr>
                            <table data-toggle="table"
                    </table>
                </div>
            </div>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Edit User</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form action="/action.php" method="patch">
                                <div class="form-group">
                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" class="form-control" id="address" placeholder="Address" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone"><strong style="color: red;">*</strong> Phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Phone" required>
                                </div>
                                <div class="form-group">
                                    <label for="email"><strong style="color: red;">*</strong> Email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                <label for="role">Role</label>
                                <select type="email" class="form-control" id="role" aria-describedby="statushelp" placeholder="Select Role">
                                    <option value="selectRole">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>   
                            </div>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Update</button>
                        
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal" id="myModal1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Add User</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form action="/action.php" method="patch">
                                <div class="form-group">
                                    <label for="name"><strong style="color: red;">*</strong> Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" class="form-control" id="address" placeholder="Address" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone"><strong style="color: red;">*</strong> Phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Phone" required>
                                </div>
                                <div class="form-group">
                                    <label for="email"><strong style="color: red;">*</strong> Email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                <label for="role">Role</label>
                                <select type="email" class="form-control" id="role" aria-describedby="statushelp" placeholder="Select Role">
                                    <option value="selectRole">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>   
                            </div>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #01B2BA !important;">Submit</button>
                        
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Modal (Delete) -->
                <div id="deletemodal" class="modal fade">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">			
                                <h4 class="modal-title">Are you sure?</h4>	
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to delete it? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

        `)
    })

});