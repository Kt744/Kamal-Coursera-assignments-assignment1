(
	function ()
	{
		'use strict';
		angular.module('app', [])
			.controller(
				'control', function ($scope)
				{
					$scope.content="";
					$scope.msg="Please enter data in the form:item1,item2,item3..";
					$scope.display= function ()
						{
							const num=calcnum($scope.content);
							if($scope.content=="")
								$scope.msg="Please enter data first!";
							else if(num<4)
								$scope.msg="Enjoy!";
							else
								$scope.msg="Too much!";
						};

					function calcnum(string)
					{
						const words=string.split(',');
						var tot=0;
						for (var i = 0; i < words.length; i++)
							tot++;
						return tot;
					}
				}
			);
	}
)();
