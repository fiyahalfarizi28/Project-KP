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
                price: '150000'
            },
            {
                name: 'Elvi ',
                lockerType: 'Daily',
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
    price: ''
}

$(document).ready(function () {

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
                        <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start / Until</th>
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

    $('#home').one('click', function() {
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
                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start / Until</th>
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

    $("#schedule").one('click', function() { 
        $("#content-menu").empty()
        $("#content-menu").append(`
            <div class="box">
                <div class="box-header">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="box-title">Rocca Schedules</h3>
                        </div>
                    </div>
                    <div class="row mg-top-10">
                        <div class="col-md-12 right" style="margin-bottom: 25px">
                            <a class="btn btn-primary" style="background: #01B2BA" href=""> New Schedule </a>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                    <table id="dtBasicExample" class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Schedule_Name"> Schedule Name</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Category"> Category</th> 
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Date" > Date</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Start_Until" > Start / Until</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Instructor" > Instructor</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="Price" > Price</th>
                            <th class="th-sm" style="height: 50px !important; vertical-align: middle;" data-field="Action"> Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a data-toggle="modal" data-target="#myModal"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are ye want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 1.000.000.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Lari</a></td>
                                <td>Jogging</td>
                                <td>Wednesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>EL</td>
                                <td>Rp. 300.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Elvia</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Running</a></td>
                                <td>Run</td>
                                <td>Tuesday, 18-06-2019</td><td>07:30 PM - 08:30 PM</td>
                                <td>Kuma</td>
                                <td>Rp. 250.000</td>
                                <td>
                                    <a href="#"> <i class="fa fa-fw fa-edit" style="color: #01B2BA" > </i> Edit</a> &nbsp <a data-confirm="Are you sure want to delete it ?" rel="nofollow" data-method="delete" href="#"><i class="fas fa-times" style="color: #01B2BA"></i> Delete</a>
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
                            <h4 class="modal-title">Edit Schedule</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form action="/action.php" method="patch">
                                <div class="form-group">
                                    <label for="sportCategory"><strong style="color: red;">*</strong> Sport Category</label>
                                    <select type="email" class="form-control" id="sportCategory" aria-describedby="categorylHelp" placeholder="Select Category">
                                        <option value="Training">Training</option>
                                        <option value="Run">Yoga</option>
                                        <option value="Yoga">Yoga</option>
                                    </select
                                    <small id="categoryHelp" class="form-text text-muted">Select sport category</small>
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
                                    <label for="instructorSpecialization">Instructor Specialization</label>
                                    <input type="text" class="form-control" id="instructorSpecialization" placeholder="Instructor Specialization" required>
                                </div>
                                <div class="form-group">
                                    <label for="date"><strong style="color: red;">*</strong> Start Date</label>
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
                                    <label for="description"><strong style="color: red;">*</strong> Description:</label>
                                    <textarea class="form-control" rows="5" id="description"></textarea>
                                </div>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary style="position: absolute; right: 25px; background: #0CABB4 !important;">Submit</button>
                        
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        `)
        console.log("hahahehe")
        $('#dtBasicExample').DataTable();
        $('.dataTables_length').addClass('bs-select');
    })

    $('#locker').one('click', function() {
        $("#content-menu").empty()
        $("#content-menu").append(`
        <div class="box">
            <div class="box-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="box-title">Rocca's Locker</h3>
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
                    </thead>
                    <tbody id="dataLocker">
                    </tbody>
                </table>
            </div>
        </div>
        <table data-toggle="table">
        `)
        for (var i=0; i<datadummy.length; i++) {
            $(`
                <tr>
                    <td style="vertical-align: middle">${datadummy[i].name}</td>
                    <td style="vertical-align: middle">${datadummy[i].location}</td>
                    <td style="vertical-align: middle">${datadummy[i].quantity}</td>
                    <td style="vertical-align: middle">${datadummy[i].status}</td>
                    <td style="vertical-align: middle"> <button id="lockerName${i}" class="btn btn-link" style="color: #0CABB4 !important">Show</button>
                </tr>
            `).appendTo("#dataLocker")
            $(`#lockerName${i}`).on('click', function() {
                $("#content-menu").empty()
                $("#content-menu").append(`
                    <p>
                        Name: ${datadummy[0].name}
                    </p>
                    <p>
                        Location; ${datadummy[0].location}
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
                            </div>
                        </div>
                        <div class="box-body">
                            <table class="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                <thead>
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="name">Name</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="lockerType">Locker Type</th> 
                                    <th class="th-sm" style="height: 50px !important; vertical-align: middle" data-field="price" >Price</th>
                                </thead>
                                <tbody id="dataSubLocker">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <table data-toggle="table">
                `)
                for (j=0; j<datadummy[0].subLocker.length; j++) {
                    $(`#dataSubLocker`).append(`
                        <tr>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].name}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].lockerType}</td>
                            <td style="vertical-align: middle">${datadummy[0].subLocker[j].price}</td>
                        </tr>
                    `)
                }
            })
        }
    })
});