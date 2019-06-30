$(document).ready(function () {
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

    
$("#schedule").on('click', function() {
        console.log('===============') 
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
                    <table class="table table-bordered table-striped">
                    <div class="container text-center">


                        <thead>
 
<th class="col-xs-1" data-field="Schedule_Name" data-sortable="true">Schedule Name</th> 
<th class="col-xs-1" data-field="Category" data-sortable="true">Category</th> 
<th class="col-xs-1" data-field="Date" data-sortable="true">Date</th>
<th class="col-xs-1" data-field="Start_Until" data-sortable="true">Start / Until</th>
<th class="col-xs-1" data-field="Instructor" data-sortable="true">Instructor</th>
<th class="col-xs-1" data-field="Price" data-sortable="true">Price</th>
<th class="col-xs-6" data-field="Action" >Action</th>
 
</tr>
                        </thead>
                        <tbody>
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
                            <table data-toggle="table"
 


 
>
                            
        `)
    })
});