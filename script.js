					// create the module and name it scotchApp



					var scotchApp = angular.module('scotchApp', ['ngRoute','ui.bootstrap']);

					// configure our routes
					scotchApp.config(function($routeProvider) {
						$routeProvider

							// route for the home page
							.when('/', {
								templateUrl : 'pages/home.html',
								controller  : 'mainController'
							})
							
							.when('/Add_Student', {
								templateUrl: 'pages/Add_student.html',


							})
							.when('/Add_Exam', {
								templateUrl: 'pages/Admin_Examschedule.html',


							})
							.when('/Add_Result', {
								templateUrl: 'pages/Admin_Result.html',


							})

							// route for the about page
							.when('/about', {
								templateUrl : 'pages/about.html',
								controller  : 'aboutController'
							})

							// route for the contact page
							.when('/contact', {
								templateUrl : 'pages/contact.html',
								controller  : 'contactController'
							})
							.when('/Holiday', {
								templateUrl : 'pages/Holiday.html',
								controller  : 'HolidayController'
							})
							.when('/Admin', {
								templateUrl: 'pages/Admin_holiday.html',


							})

							.when('/Employee', {
								templateUrl : 'pages/Employee.html',
								// controller  : 'aboutController'
							})

							.when('/Admin_Transport', {
								templateUrl: 'pages/Admin_Transport.html',


							})
							.when('/Add_fee', {
								templateUrl: 'pages/Admin_Add_fee.html',


							})

							.when('/Transport', {
								templateUrl : 'pages/Transport.html',
								controller  : 'TransportController'
							})
							.when('/Dashboard', {
								templateUrl : 'pages/Dashboard.html',
								controller  : 'DashboardController'
							})
							.when('/circular', {
								templateUrl : 'pages/circular.html',
								controller  : 'circularController'
							})
							.when('/assignment', {
								templateUrl : 'pages/assignment.html',
								controller  : 'assignmentController'
							})

							.when('/Admin_assignment', {
								templateUrl : 'pages/Admin_Assignment.html',
								// controller  : 'Admin_AssignmentController'
							})

							.when('/Admin_Circular',{
								templateUrl :'pages/Admin_Circular.html',
								controller : 'Admin_CircularController'
							});
						});

					// create the controller and inject Angular's $scope
					scotchApp.controller('mainController', function($scope, $http) {

					});

					scotchApp.controller('Add_student_classController', function($scope, $http,AddedstudentService) {
						debugger;
						
						$http({
							url:'http://localhost:61693/api/Exam_schedule/GetClass' , method: "GET"
						})
						.success(function (data, status, headers, config) {
							$scope.classlist = data;

							// alert(JSON.stringify($scope.classlist));

						})
						.error(function (data, status, headers, config) {

						})

						$scope.getAddedstudents=function(){
							$scope.sample=$scope.Select_class.Class_Id;
							$scope.StudentList=AddedstudentService.getAddedstudentsfunc($http,$scope,$scope.sample);
						}




						$scope.editstudent=function(a){     

							$scope.selected = a;

							$("#editAddstudentModal").on('shown.bs.modal', function (event) {
								window.setTimeout(function () {
									// alert(a.Id);
									$(event.currentTarget).find('input#TxtId').first().val(a.Id);
									$(event.currentTarget).find('input#TxtName').first().val(a.Name);
									$(event.currentTarget).find('input#TxtFather_Name').first().val(a.Father_Name);  
									$(event.currentTarget).find('input#TxtMother_Name').first().val(a.Mother_Name); 
									$(event.currentTarget).find('input#TxtClass_Id').first().val(a.Class_Id);
									$(event.currentTarget).find('input#TxtDate_of_Birth').first().val(a.Date_of_Birth);
									$(event.currentTarget).find('input#TxtDate').first().val(a.Date);
									$(event.currentTarget).find('input#TxtAddress').first().val(a.Address);
									$(event.currentTarget).find('input#TxtMobile_number').first().val(a.Mobile_number);
									$(event.currentTarget).find('input#TxtFather_Mobile_number').first().val(a.Father_Mobile_number);
									$(event.currentTarget).find('input#TxtMother_Mobile_number').first().val(a.Mother_Mobile_number);

								}, 75);
							});

						}
						$scope.addresult=function(a){     

							$scope.selected = a;
							alert(JSON.stringify(a));

							$("#Add_Students_ResultModal").on('shown.bs.modal', function (event) {
						
									// alert(a.Id);
									$(event.currentTarget).find('input#TxtId').first().val(a.Id);
									$(event.currentTarget).find('input#TxtName').first().val(a.Name);
									$(event.currentTarget).find('input#TxtClass_Id').first().val(a.Class_Id);
									
							});

					}
       //                 $("#Add_Students_ResultModal").on(function(event){
							// var mydata={
							// 	"Name":$("#TxtName").val(),
							// 	"Class_Id":$("#TxtClass_Id").val(),
							// 	"Id":$("#TxtId").val(),
							// 	// "Date": $("#TxtDate").val() ,
							// 	"Subject": parseInt($("#subjectid").val())+1,
							// 	"Term":parseInt($("#termid").val())+1,
							// 	"Result":parseInt($("#resultbox").val())+1
								

							// };
							// alert(JSON.stringify(mydata));
       //                 });
	
						$scope.Insert_Result=function(){
								alert($("#TxtClass_Id").val());
							var mydata={
								"Name":$("#TxtName").val(),
								"Class_Id":$("#TxtClass_Id").val(),
								"Id":$("#TxtId").val(),
								// "Date": $("#TxtDate").val() ,
								"Subject": parseInt($("#subjectid").val())+1,
								"Term":parseInt($("#termid").val())+1,
								"Result":parseInt($("#resultbox").val())+1,
								

							 };
						 	$http.post(
								'http://localhost:61693/api/Admin_Result/InsertResult',
								JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									swal("Success", "details Inserted", "success");
									window.location.reload();


								});
							alert(JSON.stringify(mydata));
						}




						$scope.UpdateAddstudent=function(){
							var mydata = {
								"Id":$("#TxtId").val(),
								"Name": $("#TxtName").val(),
								"Father_Name": $("#TxtFather_Name").val() ,
								"Mother_Name": $("#TxtMother_Name").val(),
								"Class_Id": $("#TxtClass_Id").val() ,
								"Date_of_Birth": $("#TxtDate_of_Birth").val(),
								"Date": $("#TxtDate").val() ,
								"Address": $("#TxtAddress").val(),
								"Mobile_number": $("#TxtMobile_number").val() ,
								"Father_Mobile_number": $("#TxtFather_Mobile_number").val(),
								"Mother_Mobile_number": $("#TxtMother_Mobile_number").val() ,
							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Admin_add_student/UpdateStudent_Details',
								JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									swal("Updated", "details updated", "success");
									window.location.reload();


								});
							
							// $scope.refresh = function () {
							// window.location.reload(); 
						// };



						$scope.getdatatoDeleteStudentdetails=function(a){     

									$scope.selected = a;

									$("#DeleteStudentDetailsModal").on('shown.bs.modal', function (event) {
										window.setTimeout(function () {

											$(event.currentTarget).find('input#TxtId').first().val(a.Id);
											$(event.currentTarget).find('input#TxtClass_Id').first().val(a.Class_Id);
										});

									})

									$scope.DeleteStudentdetails=function(){
										// alert(t.Id);
										$scope.selected = a;
										// if (t.Id > 0) {
											alert(a.Id);

											$http.delete("http://localhost:61693/api/Admin_add_student/DeleteStudentsDetails/?Id=" + a.Id ,{params:{Class_Id:a.Class_Id}})
											.success(function (data) {
												window.location.reload();
												alert("succesfully Deleted");
												
							                // $location.path('/Admin_Holiday');
							            }).error(function (data) {
							            	console.log(data);
							            	$scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
							            });
							        }
							    }
							}

					});



					scotchApp.controller('aboutController', function($scope, $http) {

						$scope.UpdateFee=function(){


							debugger;
							alert(parseInt($("#comboClass").val())+1);
							alert(parseInt($("#Student_Id").val())+1);
							alert(parseInt($("#feetypeabc").val())+1);
							var mydata = {
								"Class_Id": parseInt($("#comboClass").val())+1,
								"Student_Id":  parseInt($("#Student_Id").val())+1,
								"ID": parseInt($("#feetypeabc").val())+1,
								"Fee_Paid":$scope.Fee_Paid
							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Admin_Fee/UpdatePaynow',
								JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									
								swal({
									title: "Updated succesfully",
									type: "success",
									// confirmButtonColor: "#DD6B55",
									timer: 2000,
									confirmButtonText: "Ok!", 
								}, function(){
									window.location.reload();
								});
								setTimeout(function() {
									window.location.reload();
								}, 1000);


								});
							}

						});



					scotchApp.controller('contactController', function($scope, $http,examService,ExamscheduleService) {
						// scotchApp.controller('AddExamController', function($scope, $http) {
							$scope.Exam=examService.examFunc($http,$scope);


							$http({	url:'http://localhost:61693/api/Exam_schedule/GetClass' , method: "GET"
						})
							
							.success(function (data, status, headers, config) {
								$scope.classlist = data;	
							})
							
							.error(function (data, status, headers, config) {
							})




							$http({	url:'http://localhost:61693/api/Admin_Exam/GetSubjects' , method: "GET"
						})
							
							.success(function (data, status, headers, config) {
								$scope.Subjectlist = data;	
							})
							
							.error(function (data, status, headers, config) {
							})




							$http({	url:'http://localhost:61693/api/Admin_Exam/Getterm' , method: "GET"
						})
							
							.success(function (data, status, headers, config) {
								$scope.Termlist = data;	
							})
							
							.error(function (data, status, headers, config) {
							})




							$scope.editExamschedule=function(es)
							{     

								$scope.selected = es;

								$("#editExamscheduleModal").on('shown.bs.modal', function (event) {
									window.setTimeout(function () {
										// alert(es.Class_Id);

										$(event.currentTarget).find('input#TxtClass_Id').first().val(es.Class_Id);
										$(event.currentTarget).find('input#TxtId').first().val(es.Id);
										$(event.currentTarget).find('input#TxtClass').first().val(es.Class);
										$(event.currentTarget).find('input#TxtYear').first().val(es.Year);  
										$(event.currentTarget).find('input#TxtExam_Date').first().val(es.Exam_Date); 
										$(event.currentTarget).find('input#TxtSubject').first().val(es.Subject);
										$(event.currentTarget).find('input#TxtTerm').first().val(es.Term);
										$(event.currentTarget).find('input#TxtDescription').first().val(es.Description);


									}, 75);
								});

							}

							$scope.UpdateExamSchedule=function(){
								var mydata = {
									"Class_Id":$("#TxtClass_Id").val(),
									"Id":$("#TxtId").val(),
									"Class": $("#TxtClass").val(),
									"Id":$("#TxtId").val(),
									"Year": $("#TxtYear").val() ,
									"Exam_Date": $("#TxtExam_Date").val(),
									"Subject": parseInt($("#TxtSubject").val())+1,
									"Term": parseInt($("#TxtTerm").val())+1,
									"Description": $("#TxtDescription").val() ,

								};
								alert(JSON.stringify(mydata));
								$http.post(
									'http://localhost:61693/api/Admin_Exam/UpdateExam_schedule',
									JSON.stringify(mydata),
									{
										headers: {
											'Content-Type': 'application/json'
										}
									}
									).success(function (data) {
										
								swal({
									title: "Updated succesfully",
									type: "success",
									// confirmButtonColor: "#DD6B55",
									timer: 2000,
									confirmButtonText: "Ok!", 
								}, function(){
									window.location.reload();
								});
								setTimeout(function() {
									window.location.reload();
								}, 1000);

									});
								}




								$scope.getExamschedule=function(){
									$scope.sample=$scope.Select_class.Class_Id;
									$scope.ExamList=ExamscheduleService.getExamschedulefunc($http,$scope,$scope.sample);
								}



								$http({	url:'http://localhost:61693/api/Admin_Holiday/GetYear' , method: "GET"
							})

								.success(function (data, status, headers, config) {


									$scope.YearList = data;

								})
								.error(function (data, status, headers, config) {

								})
								$scope.Data={};
								$scope.InsertExam=function(){


									debugger;
									alert(parseInt($("#comboClass").val())+1);
									var mydata = {
										"Class_Id": parseInt($("#comboClass").val())+1,
										"Year": $scope.select_year,
										"Exam_date": $scope.Exam_date ,
										"Subject":parseInt($("#subjectid").val())+1,
										"Term":parseInt($("#termid").val())+1,
										"Description": $scope.Description ,
									};
									// alert(JSON.stringify(mydata));
									$http.post(
										'http://localhost:61693/api/Admin_Exam/InsertExamSchedule',
										JSON.stringify(mydata),
										{
											headers: {
												'Content-Type': 'application/json'
											}
										}
										).success(function (data) {
											window.location.reload();
												alert("succesfully Added");

										});
									}


									$scope.getdatatoDeleteExamschedule=function(es){     

									$scope.selected = es;

									$("#DeleteExamscheduleDataModal").on('shown.bs.modal', function (event) {
										window.setTimeout(function () {

											$(event.currentTarget).find('input#TxtId').first().val(es.Id);
											$(event.currentTarget).find('input#TxtClass_Id').first().val(es.Class_Id);
										});

									})

									$scope.DeleteExamSchedule=function(){
										// alert(t.Id);
										$scope.selected = es;
										// if (t.Id > 0) {
											alert(es.Id);

											$http.delete("http://localhost:61693/api/Admin_Exam/DeleteExamSchedule/?Id=" + es.Id ,{params:{Class_Id:es.Class_Id}})
											.success(function (data) {
												window.location.reload();
												alert("succesfully Deleted");
												
							                // $location.path('/Admin_Holiday');
							            }).error(function (data) {
							            	console.log(data);
							            	$scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
							            });
							        }
							    }

							    var today = new Date();
							    var nextWeek = new Date();
							    nextWeek.setDate(nextWeek.getDate() + 7);

							    $scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
							    	if( col.filters[0].term ){
							    		return 'header-filtered';
							    	} else {
							    		return '';
							    	}
							    };





					});


					scotchApp.controller('showfeeController',  function ($scope,$http,feegetservice) {


						$http({
							url:'http://localhost:61693/api/Exam_schedule/GetClass' , method: "GET"
						})

						.success(function (data, status, headers, config) {
							$scope.classlist = data;
									// alert(JSON.stringify($scope.classlist));
									
								})
						.error(function (data, status, headers, config) {

						})

						$scope.getstudentlist=function(){
							$scope.sample=$scope.Select_class.Class_Id;

							$scope.Fee=feegetservice.feeFunc($http,$scope,$scope.sample);

						}

						$scope.getFeeList=function(){
							$scope.feetype=$scope.Select_Student.Student_Id;


							$scope.Feevariable=feegetservice.feetypefunc($http,$scope,$scope.feetype)
						}

						$scope.getFeeDetails=function(){
							$scope.class=$scope.Select_class.Class_Id;
							$scope.student=$scope.Select_Student.Student_Id;
							$scope.feetype=$scope.Select_Feetype.ID;



							$scope.Feedetails=feegetservice.feedetailsfunc($http,$scope,$scope.class,$scope.student,$scope.feetype);
						}


						$scope.getstudentsFee=function(){
							$scope.sample=$scope.Select_class.Class_Id;
							$scope.Studentfees=feegetservice.classfeefunc($http,$scope,$scope.sample);
						}



						$scope.editstudentfee=function(s){     

							$scope.selected = s;

							$("#editstudentfeeModal").on('shown.bs.modal', function (event) {
								window.setTimeout(function () {
									// alert(s.Student_Id);
									// alert(s.Class_Id);
									// alert(s.ID);
									$(event.currentTarget).find('input#TxtID').first().val(s.ID);
									$(event.currentTarget).find('input#TxtClass_Id').first().val(s.Class_Id);
									$(event.currentTarget).find('input#TxtStudent_Id').first().val(s.Student_Id);
									$(event.currentTarget).find('input#TxtStudent_Name').first().val(s.Student_Name);
									$(event.currentTarget).find('input#TxtFee_type').first().val(s.Fee_type);   
									$(event.currentTarget).find('input#TxtFee_Paid').first().val(s.Fee_Paid);
									$(event.currentTarget).find('input#TxtBalance').first().val(s.Balance);
								}, 75);
							});

						}

						$scope.Updatestudentfee=function(){
										var mydata = {
											"Class_Id":$("#TxtClass_Id").val(),
											"Student_Id":$("#TxtStudent_Id").val(),
											"ID":$("#TxtID").val(),
											// "Student_Name": $("#TxtStudent_Name").val(),
											"Fee_type": $("#TxtID").val() ,
											"Fee_Paid": $("#TxtFee_Paid").val(),
											// "Balance": $("#TxtBalance").val() ,
											
										};
										// alert(JSON.stringify(mydata));
										$http.post(
											'http://localhost:61693/api/Admin_Fee/update_student_fee',
											JSON.stringify(mydata),
											{
												headers: {
													'Content-Type': 'application/json'
												}
											}
											).success(function (data) {
												
								swal({
									title: "Updated succesfully",
									type: "success",
									// confirmButtonColor: "#DD6B55",
									timer: 2000,
									confirmButtonText: "Ok!", 
								}, function(){
									window.location.reload();
								});
								setTimeout(function() {
									window.location.reload();
								}, 1000);



											});
										}

									});



					scotchApp.controller('Admin_ExamController', function($scope, $http) {
						$http({
							url:'http://localhost:61693/api/Admin_Holiday/GetYear' , method: "GET"
						})

						
						.success(function (data, status, headers, config) {
							$scope.yearlist = data;

						})
						.error(function (data, status, headers, config) {

						})


					});



					<!--For adding student-->

					scotchApp.controller('Add_studentController', function($scope, $http) {
						$scope.Data={};
						$scope.InsertStudent=function(){
							debugger;
							alert(parseInt($("#comboClass").val())+1);
							var mydata = {
								"Name": $scope.Name,
								"Father_Name": $scope.Father_Name ,
								"Mother_Name": $scope.Mother_Name ,
								"Class_Id": parseInt($("#comboClass").val())+1,
								"Date_of_Birth": $scope.Date_of_Birth,
								"Date": $scope.Date,
								"Address": $scope.Address ,
								"Mobile_number": $scope.Mobile_number ,
								"father_Mobile_number": $scope.Father_Mobile_number ,
								"Mother_Mobile_number": $scope.Mother_Mobile_number ,
							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Admin_add_student/InsertStudent',
								JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									window.location.reload();
									alert("succesfully Added");

								});
							}
						});

					scotchApp.controller('EmployeeController', function($scope, $http,employeelistService)
					{
						$http({
							url: 'http://localhost:61693/api/Admin_Employee/GetEmployeeList',method: "GET"
						})
						.success(function (data, status, headers, config) {
							$scope.employeetypelist = data;

							// alert(JSON.stringify($scope.employeetypelist));
						})
						.error(function (data, status, headers, config) {
							console.log('data error');
						})

						$scope.GetEmployeeList=function(){
							// alert(1);
							$scope.sample=$scope.Select_Employeetype.Emptype_Id;

							$scope.Employee=employeelistService.employeeFunc($http,$scope,$scope.sample);

						 }


										 $scope.Data={};
						$scope.InsertEmployee=function(){


									debugger;
									// alert(parseInt($("#comboClass").val())+1);
									var mydata = {
										"Emptype_Id": parseInt($("#comboId").val())+1,
										// "Id": parseInt($("#comboId").val())+1,
										"Name": $scope.Name,
										"DOB": $scope.DOB ,
										"Phone": $scope.Phone ,
										"Email_Id": $scope.Email_Id ,
								   		"DOJ": $scope.DOJ ,
										"Address":$scope.Address,
										"Qualification": $scope.Qualification
										
									};
									// alert(JSON.stringify(mydata));
									$http.post(
										'http://localhost:61693/api/Admin_Employee/InsertEmployee',
										JSON.stringify(mydata),
										{
											headers: {
												'Content-Type': 'application/json'
											}
										}
										).success(function (data) {
											window.location.reload();


									alert("succesfully Added");
									
									});
									}
						$scope.editemployeeDetails=function(e)
							{     

								$scope.selected = e;

								$("#editEmployeeModal").on('shown.bs.modal', function (event) {
									window.setTimeout(function () {
										// alert(es.Class_Id);

										$(event.currentTarget).find('input#TxtEmployee_Id').first().val(e.Employee_Id);
										// $(event.currentTarget).find('input#TxtId').first().val(e.Id);
										$(event.currentTarget).find('input#TxtName').first().val(e.Name);
										$(event.currentTarget).find('input#TxtDOB').first().val(e.DOB);
										$(event.currentTarget).find('input#TxtPhone').first().val(e.Phone); 
										$(event.currentTarget).find('input#TxtEmail_Id').first().val(e.Email_Id);
										$(event.currentTarget).find('input#TxtDOJ').first().val(e.DOJ);
										$(event.currentTarget).find('input#TxtEmptype_Id').first().val(e.Emptype_Id);
										$(event.currentTarget).find('input#TxtAddress').first().val(e.Address);
										$(event.currentTarget).find('input#TxtQualification').first().val(e.Qualification);


									}, 75);
								});

							}

							$scope.UpdateEmployeeDetails=function(){
								var mydata = {
									"Employee_Id":$("#TxtEmployee_Id").val(),
									"Name": $("#TxtName").val(),
									"DOB": $("#TxtDOB").val() ,
									"Phone": $("#TxtPhone").val(),
									"Email_Id": $("#TxtEmail_Id").val() ,
									"DOJ": $("#TxtDOJ").val(),
									"Emptype_Id":  parseInt($("#comboId").val())+1,
									"Address": $("#TxtAddress").val(),
									"Qualification": $("#TxtQualification").val() ,

								};
								// alert(JSON.stringify(mydata));
								$http.post(
									'http://localhost:61693/api/Admin_Employee/Update_Employee_Details',
									JSON.stringify(mydata),
									{
										headers: {
											'Content-Type': 'application/json'
										}
									}
									).success(function (data) {
										
								swal({
									title: "Updated succesfully",
									type: "success",
									// confirmButtonColor: "#DD6B55",
									timer: 2000,
									confirmButtonText: "Ok!", 
								}, function(){
									window.location.reload();
								});
								setTimeout(function() {
									window.location.reload();
								}, 1000);

									});
								}


							$scope.getdatatoDeleteemployeedetails=function(e){     

									$scope.selected = e;

									$("#DeleteEmployeeDetailsModal").on('shown.bs.modal', function (event) {
										window.setTimeout(function () {

											$(event.currentTarget).find('input#TxtEmployee_Id').first().val(e.Employee_Id);
											
										});

									})
								



								$scope.Deleteemployee=function(){
										// alert(t.Id);
										$scope.selected = e;
										// if (t.Id > 0) {
											// alert(e.Employee_Id);

											$http.delete("http://localhost:61693/api/Admin_Employee/Delete_Employee_Details/?Employee_Id=" + e.Employee_Id )
											
											.success(function (data) {
												window.location.reload();
												alert("succesfully Deleted");
												
							                // $location.path('/Admin_Holiday');
							            }).error(function (data) {
							            	console.log(data);
							            	$scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
							            });
							        }
						  }

					});


					scotchApp.controller('HolidayController', function($scope, $modal,$http,holidayService) {
						
						

						$http({
							url: 'http://localhost:61693/api/Holiday/GetYear',method: "GET", params: {Year: $scope.sample }
						})
						.success(function (data, status, headers, config) {
							$scope.yearlist = data;
						})
						.error(function (data, status, headers, config) {
							console.log('data error');
						})

						debugger;
						$scope.GetHolidyList=function(){
							$scope.sample=$scope.select_year.Year;

							$scope.Holiday=holidayService.holidayFunc($http,$scope,$scope.sample);

						}
						$scope.Data = {};


						$scope.PostHolidayList=function(){
							$scope.hhjj=$scope.Holiday_Name;
							// alert($scope.hhjj);    
							$scope.newData = {};

							var mydata = {
								"Holiday_Name": $scope.Holiday_Name,
								"StartDate": $scope.StartDate ,
								"EndDate": $scope.EndDate ,
								"Year": $scope.Year ,
							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Holiday/InsertHoliday',
								JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									window.location.reload();
									alert('succesfully submitted');

								});
							}


							$scope.editHoliday=function(s){     

								$scope.selected = s;

								$("#editHolidayModal").on('shown.bs.modal', function (event) {
									window.setTimeout(function () {
										alert(s.Id);
										$(event.currentTarget).find('input#TxtId').first().val(s.Id);
										$(event.currentTarget).find('input#TxtName').first().val(s.Holiday);
										$(event.currentTarget).find('input#dtStartDate').first().val(s.StartDate);   
										$(event.currentTarget).find('input#dtEndDate').first().val(s.EndDate);
										$(event.currentTarget).find('input#dtYear').first().val(s.Year);
									}, 75);
								});

							}

							$scope.UpdateHoliday=function(){
								var mydata = {
									"Id":$("#TxtId").val(),
									"Holiday_Name": $("#TxtName").val(),
									"StartDate": $("#dtStartDate").val() ,
									"EndDate": $("#dtEndDate").val(),
									"Year": $("#dtYear").val() ,
								};
								// alert(JSON.stringify(mydata));
								$http.post(
									'http://localhost:61693/api/Holiday/UpdateHoliday',
									JSON.stringify(mydata),
									{
										headers: {
											'Content-Type': 'application/json'
										}
									}
									).success(function (data) {
										
								swal({
									title: "Updated succesfully",
									type: "success",
									// confirmButtonColor: "#DD6B55",
									timer: 2000,
									confirmButtonText: "Ok!", 
								}, function(){
									window.location.reload();
								});
								setTimeout(function() {
									window.location.reload();
								}, 1000);

									});
								}


								$scope.getdatatoDeleteHoliday=function(s){     

									$scope.selected = s;

									$("#DeleteHolidayDataModal").on('shown.bs.modal', function (event) {
										window.setTimeout(function () {

											$(event.currentTarget).find('input#TxtId').first().val(s.Id);
								// 	$(event.currentTarget).find('input#TxtRoute_number').first().val(t.Route_number);
								// 	$(event.currentTarget).find('input#TxtRegistration_number').first().val(t.Registration_number);   
								// 	$(event.currentTarget).find('input#TxtDriver_name').first().val(t.Driver_name);
								// 	$(event.currentTarget).find('input#TxtDriver_Mobile_number').first().val(t.Driver_Mobile_number);
								// 	$(event.currentTarget).find('input#TxtHelper_name').first().val(t.Helper_name);
								// 	$(event.currentTarget).find('input#TxtHelper_mobile_number').first().val(t.Helper_mobile_number);
								// }, 75);
							});

									})

									$scope.DeleteHoliday=function(){
										// alert(t.Id);
										$scope.selected = s;
										// if (t.Id > 0) {
											// alert(s.Id);

											$http.delete("http://localhost:61693/api/Admin_Holiday/DeleteHolidaysDetails/?Id=" + s.Id  )
											.success(function (data) {
												window.location.reload();
												alert('succesfully Deleted');
												
							                // $location.path('/Admin_Holiday');
							            }).error(function (data) {
							            	console.log(data);
							            	$scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
							            });
							        }
							    }

							});

					

					scotchApp.controller('TransportController', function($scope, $http) {
						$scope.PostTransport=function()
						{
							// alert(1);

							$scope.hhjj=$scope.Route_number;
							// alert($scope.hhjj);    

							var mydata =
							{
								"Route_number": $scope.Route_number,
								"Registration_number": $scope.Registration_number ,
								"Driver_name": $scope.Driver_name ,
								"Driver_Mobile_number": $scope.Driver_Mobile_number ,
								"Helper_name": $scope.Helper_name ,
								"Helper_mobile_number": $scope.Helper_mobile_number ,

							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Admin_Transport_details/InsertTransportdetails',
								JSON.stringify(mydata),
								{
									headers: 
									{
										'Content-Type': 'application/json'
									}
								}
								)
							.success(function (data) {

							});

						}

						$http({
							url:'http://localhost:61693/api/Admin_Transport_details/GetTransport' , method: "GET"
						})


						.success(function (data, status, headers, config) {
							$scope.Tansportlist = data;

						})
						.error(function (data, status, headers, config) {

						})
						$scope.editTransport=function(t){     

							$scope.selected = t;

							$("#editTransportModal").on('shown.bs.modal', function (event) {
								window.setTimeout(function () {
									alert(t.Id);
									$(event.currentTarget).find('input#TxtId').first().val(t.Id);
									$(event.currentTarget).find('input#TxtRoute_number').first().val(t.Route_number);
									$(event.currentTarget).find('input#TxtRegistration_number').first().val(t.Registration_number);   
									$(event.currentTarget).find('input#TxtDriver_name').first().val(t.Driver_name);
									$(event.currentTarget).find('input#TxtDriver_Mobile_number').first().val(t.Driver_Mobile_number);
									$(event.currentTarget).find('input#TxtHelper_name').first().val(t.Helper_name);
									$(event.currentTarget).find('input#TxtHelper_mobile_number').first().val(t.Helper_mobile_number);
								}, 75);
							});

						}

						$scope.UpdateTransport=function(){
							var mydata = {
								"Id":$("#TxtId").val(),
								"Route_number": $("#TxtRoute_number").val(),
								"Registration_number": $("#TxtRegistration_number").val() ,
								"Driver_name": $("#TxtDriver_name").val(),
								"Driver_Mobile_number": $("#TxtDriver_Mobile_number").val() ,
								"Helper_name": $("#TxtHelper_name").val(),
								"Helper_mobile_number": $("#TxtHelper_mobile_number").val() ,
							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Admin_Transport_details/UpdateTransport_Details',
								JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									
									
									


									
									// alert('succesfully submitted');	                  	                                        

								});
								// swal({
								// 	title: "Updated succesfully",
									
								// 	type: "warning",
								// 	showCancelButton: true,
								// 	confirmButtonColor: "#DD6B55",
								// 	confirmButtonText: "Ok",
								// 	closeOnConfirm: false
								// },
								// function(){
								// 	swal("Deleted!", "Your imaginary file has been deleted.", "success");
								// 	window.location.reload();
								// });


								swal({
									title: "Updated succesfully",
									type: "success",
									// confirmButtonColor: "#DD6B55",
									timer: 2000,
									confirmButtonText: "Ok!", 
								}, function(){
									window.location.reload();
								});
								setTimeout(function() {
									window.location.reload();
								}, 1000);
							}
								
							

							





							$scope.getdatatoDeleteTransport=function(t){     

								$scope.selected = t;

								$("#DeleteTransportDataModal").on('shown.bs.modal', function (event) {
									window.setTimeout(function () {

										$(event.currentTarget).find('input#TxtId').first().val(t.Id);
								// 	$(event.currentTarget).find('input#TxtRoute_number').first().val(t.Route_number);
								// 	$(event.currentTarget).find('input#TxtRegistration_number').first().val(t.Registration_number);   
								// 	$(event.currentTarget).find('input#TxtDriver_name').first().val(t.Driver_name);
								// 	$(event.currentTarget).find('input#TxtDriver_Mobile_number').first().val(t.Driver_Mobile_number);
								// 	$(event.currentTarget).find('input#TxtHelper_name').first().val(t.Helper_name);
								// 	$(event.currentTarget).find('input#TxtHelper_mobile_number').first().val(t.Helper_mobile_number);
								// }, 75);
							});

								})

								$scope.DeleteTransport=function(){
			
											// alert(t.Id);
											// $scope.selected = t;

												// alert(JSON.stringify(mydata));

												$http.delete("http://localhost:61693/api/Admin_Transport_details/DeleteTransportDetails/?Id=" + t.Id  )
												.success(function (data) {
													// alert(t.Id);
													// alert('succesfully Deleted');

													window.location.reload();
													swal(
														'Good job!',
														'Deleted succesfully',
														'success'
														);


												}).error(function (data) {
													console.log(data);
													$scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
												});

											}
										}





									});



					scotchApp.controller('Admin_CircularController',  function ($scope,$http,Admin_CircularService) {
						$http({	url:'http://localhost:61693/api/Exam_schedule/GetClass' , method: "GET"
						})
							
							.success(function (data, status, headers, config) {
								$scope.classlist = data;	
							})
							
							.error(function (data, status, headers, config) {
							})


						$http({	url:'http://localhost:61693/api/Admin_Holiday/GetYear' , method: "GET"
							})

								.success(function (data, status, headers, config) {


									$scope.YearList = data;

								})
								.error(function (data, status, headers, config) {

								})

								$scope.getClassCircular=function(){
							$scope.sample=$scope.Select_class.Class_Id;
							$scope.Circular=Admin_CircularService.circularFunc($http,$scope,$scope.sample);
						}





						$scope.Data={};
								$scope.InsertCircular=function(){


									debugger;
									// alert(parseInt($("#comboClass").val())+1);
									var mydata = {
										"Class_Id": parseInt($("#comboClass").val())+1,
										"Id": parseInt($("#comboId").val())+1,
										"Year": $scope.select_year,
										"Attachment": $("input[type='file']").val().split('/').pop().split('\\').pop() ,
										
										"Date": $scope.Date ,
										"Submission_Date": $scope.Submission_Date ,
										"Image":$('#Image').attr('src')
										
									};
									// alert(JSON.stringify(mydata));
									$http.post(
										'http://localhost:61693/api/Admin_Circular/InsertCircular',
										JSON.stringify(mydata),
										{
											headers: {
												'Content-Type': 'application/json'
											}
										}
										).success(function (data) {
											window.location.reload();


									alert("succesfully Added");
									
									});
									}




						$scope.editCircular=function(c){     

							$scope.selected = c;

							$("#editCircularModal").on('shown.bs.modal', function (event) {
								window.setTimeout(function () {
								
									$(event.currentTarget).find('input#TxtClass_Id').first().val(c.Class_Id);
									$(event.currentTarget).find('input#TxtId').first().val(c.Id);
									$(event.currentTarget).find('input#TxtClass').first().val(c.Std);
									$(event.currentTarget).find('input#TxtYear').first().val(c.Year);  
									$(event.currentTarget).find('input#TxtAttachment').first().val(c.Attachment);
									$(event.currentTarget).find('input#TxtDate').first().val(c.Date);
									$(event.currentTarget).find('input#TxtSubmission_Date').first().val(c.Submission_Date);
									}, 75);
							});

						}

							

						$scope.getimageCircular=function(c){     

							$scope.selected = c;
							// alert(JSON.stringify(c));

							$("#Circular").on('shown.bs.modal', function (event) {
								window.setTimeout(function () {
									
									$(event.currentTarget).find('input#TxtClass_Id').first().val(c.Class_Id);
									$(event.currentTarget).find('input#TxtId').first().val(c.Id);
									 
									var s = "http://localhost:61693/Upload/"+c.Attachment;
									// alert(c.Attachment);
									$('#ImageCir').attr('src',s);

									}, 75);
							});

						}


						// $scope.downloadFile = function(downloadPath) { 
						// 	window.open(downloadPath, '_blank', '');  
						// }

						$scope.UpdateCircular=function(){
							var mydata = {
								"Class_Id":$("#TxtClass_Id").val(),
								"Id": $("#TxtId").val(),
								"Year": $("#TxtYear").val() ,
								// "Subject": $("#TxtSubject").val(),
								"Attachment": $('#Attachment').val().split('_').pop().split('\\').pop(),
								"Date": $("#TxtDate").val(),
								"Submission_Date": $("#TxtSubmission_Date").val() ,
								"Image":$('#Image').attr('src')
								
							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Admin_Circular/UpdateCircular',
								JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									window.location.reload();
									alert("succesfully Updated");


								});
							}



							$scope.getDeleteCircular=function(c){     

									$scope.selected = c;

									$("#DeleteStudentDetailsModal").on('shown.bs.modal', function (event) {
										window.setTimeout(function () {

											$(event.currentTarget).find('input#TxtId').first().val(c.Id);
											$(event.currentTarget).find('input#TxtClass_Id').first().val(c.Class_Id);
										});

									})

									$scope.DeleteCircular=function(){
										// alert(t.Id);
										$scope.selected = c;
										// if (t.Id > 0) {
											alert(c.Id);

											$http.delete("http://localhost:61693/api/Admin_Circular/DeleteCircular/?Id=" + c.Id ,{params:{Class_Id:c.Class_Id}})
											.success(function (data) {
												window.location.reload();
												alert("succesfully Deleted");
												
							                // $location.path('/Admin_Holiday');
							            }).error(function (data) {
							            	console.log(data);
							            	$scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
							            });
							        }
							    }



					});
					scotchApp.controller('Admin_AssignmentController',  function ($scope,$http,Admin_AssignmentService) {
						$http({	url:'http://localhost:61693/api/Exam_schedule/GetClass' , method: "GET"
						})
							
							.success(function (data, status, headers, config) {
								$scope.classlist = data;	
							})
							
							.error(function (data, status, headers, config) {
							})


						

								$scope.getAssignment=function(){
							$scope.sample=$scope.Select_class.Class_Id;
							$scope.Assignment=Admin_AssignmentService.assignmentFunc($http,$scope,$scope.sample);
						}

						$scope.clearSearch = function() {
							$scope.searchAll = null;
						}

						$scope.editAssignment=function(as){     

							$scope.selected = as;

							$("#editAssignmentModal").on('shown.bs.modal', function (event) {
								window.setTimeout(function () {
									// alert(as.Id);
									$(event.currentTarget).find('input#TxtClass_Id').first().val(as.Class_Id);
									$(event.currentTarget).find('input#TxtId').first().val(as.Id);
									$(event.currentTarget).find('input#TxtClass').first().val(as.Std);
									$(event.currentTarget).find('input#TxtDate').first().val(as.Date);  
									$(event.currentTarget).find('input#TxtSubject').first().val(as.Subject);
									$(event.currentTarget).find('input#TxtSection').first().val(as.Section);
									$(event.currentTarget).find('input#TxtAssignment_From_date').first().val(as.Assignment_From_date);
									$(event.currentTarget).find('input#TxtAssignment_To_Date').first().val(as.Assignment_To_Date);
									// $(event.currentTarget).find('input#TxtAttachement').first().val(as.Attachement);
									}, 75);
							});

						}
						$scope.Data={};
								$scope.InsertAssignment=function(){


									debugger;
									// $scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');
									var mydata = {
										"Class_Id": parseInt($("#comboClass").val())+1,
										// "Id": parseInt($("#comboId").val())+1,
										"Attachement": $("input[type='file']").val().split('/').pop().split('\\').pop() ,
										"Subject": $scope.Subject ,
										"Section": $scope.Section ,
										"Date": $scope.date ,
										"Assignment_From_date": $scope.Assignment_From_date ,
										"Assignment_To_Date": $scope.Assignment_To_Date ,
										"Image":$('#Image').attr('src')
										
									};
									// alert(JSON.stringify(mydata));
									$http.post(
										'http://localhost:61693/api/Admin_Assignment/InsertAssignment',
										JSON.stringify(mydata),
										{
											headers: {
												'Content-Type': 'application/json'
											}
										}
										).success(function (data) {
											window.location.reload();
									alert("succesfully Added");
									// $("#comboClass").val(3).trigger("change");
									});
									}


						$scope.getimageAssignment=function(as){     

							$scope.selected = as;
							// alert(JSON.stringify(as));
							$("#Assignment").on('shown.bs.modal', function (event) {
								window.setTimeout(function () {
									
									$(event.currentTarget).find('input#TxtClass_Id').first().val(as.Class_Id);
									$(event.currentTarget).find('input#TxtId').first().val(as.Id);
									 
									var s = "http://localhost:61693/Upload/"+as.Attachement;
									
									$('#ImageAssign').attr('src',s);

									}, 75);
							});

						}

						$scope.UpdateAssignment=function(){
							debugger;
							var mydata = {
								"Class_Id":$("#TxtClass_Id").val(),
								"Id": $("#TxtId").val(),
								"Date": $("#TxtDate").val() ,
								"Subject": $("#TxtSubject").val(),
								"Section": $("#TxtSection").val(),
								"Attachement": $('#Attachement').val().split('_').pop().split('\\').pop(),
								"Assignment_From_date": $("#TxtAssignment_From_date").val(),
								"Assignment_To_Date": $("#TxtAssignment_To_Date").val() ,
								"Image":$('#Image').attr('src')

								
							};
							// alert(JSON.stringify(mydata));
							$http.post(
								'http://localhost:61693/api/Admin_Assignment/UpdateAssignment',
								// JSON.stringify(mydata),
								{
									headers: {
										'Content-Type': 'application/json'
									}
								}
								).success(function (data) {
									window.location.reload();
									alert("succesfully Updated");


								});
							}



							$scope.getDeleteAssignment=function(as){     

									$scope.selected = as;

									$("#DeleteAssignmentDataModal").on('shown.bs.modal', function (event) {
										window.setTimeout(function () {

											$(event.currentTarget).find('input#TxtId').first().val(as.Id);
											$(event.currentTarget).find('input#TxtClass_Id').first().val(as.Class_Id);
										});

									})

									$scope.DeleteAssignment=function(){
										// alert(t.Id);
										$scope.selected = as;
										// if (t.Id > 0) {
											// alert(as.Id);

											$http.delete("http://localhost:61693/api/Admin_Assignment/DeleteAssignment/?Id=" + as.Id ,{params:{Class_Id:as.Class_Id}})
											.success(function (data) {
												window.location.reload();
												alert("succesfully Deleted");
												
							                // $location.path('/Admin_Holiday');
							            }).error(function (data) {
							            	console.log(data);
							            	$scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
							            });
							        }
							    }
					});

										function doUpload(input) {
							    	if (input.files && input.files[0]) {
							    		var reader = new FileReader();

							    		var file = input.files[0];
							    		var img = new Image();
							    		var sizeKB = file.size / 1024;

							    		var ImageSize = $("#ImageSize").val();

							    		for (var i = 0; i < input.length; i++) {
							    			var file = $files[i];
							    			if (file.type.indexOf('image') === -1) { alert('only images are allows'); continue; }
							    		}
							    		
							    		reader.onload = function (e) {
							    			$('#Image').attr('src', e.target.result).width(120).height(140);
							    		};
							    		$("#lblValidationWarningMessageAssets").html("");
							    		reader.readAsDataURL(input.files[0]);
							    	}
							    }


					scotchApp.controller('Admin_resultController', function($scope,$http,getstudentresultservice) {
						

						$http({
							url:'http://localhost:61693/api/Exam_schedule/GetClass' , method: "GET"
						})

						.success(function (data, status, headers, config) {
							$scope.classlist = data;
									// alert(JSON.stringify($scope.classlist));
									
								})
						.error(function (data, status, headers, config) {

						})


							$http({
							url:'http://localhost:61693/api/Admin_Result/GetGradeList' , method: "GET"
						})

						
						.success(function (data, status, headers, config) {
							$scope.Gradelist = data;

						})
						.error(function (data, status, headers, config) {

						})


							$http({	url:'http://localhost:61693/api/Admin_Exam/GetSubjects' , method: "GET"
						})
							
							.success(function (data, status, headers, config) {
								$scope.Subjectlist = data;	
							})
							
							.error(function (data, status, headers, config) {
							})




							$http({	url:'http://localhost:61693/api/Admin_Exam/Getterm' , method: "GET"
						})
							
							.success(function (data, status, headers, config) {
								$scope.Termlist = data;	
							})
							
							.error(function (data, status, headers, config) {
							})


							$scope.getstudents=function(){
							$scope.sample=$scope.Select_class.Class_Id;

							$scope.Student=getstudentresultservice.studentFunc($http,$scope,$scope.sample);

						}

					


					});

					scotchApp.controller('DashboardController', function($scope) {
						$scope.message = ' JK. This is just a demo.';
					});
					scotchApp.controller('circularController', function($scope) {


						$scope.message = ' JK. This is just a demo.';
					});
					scotchApp.controller('assignmentController', function($scope) {
						$scope.message = ' JK. This is just a demo.';
					});

					scotchApp.controller('AddExamController',  function ($scope) {

					});






