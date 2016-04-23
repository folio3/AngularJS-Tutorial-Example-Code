(function(){

var app = angular.module('GridApp', ['angularUtils.directives.dirPagination']);

app.controller('GridController', ['$scope', function($scope){
	scope = $scope;
	scope.itemsPerPage = 10;
	scope.sortKey = 'name';
	scope.sortReverse = false;

	scope.sort = function(key){
		scope.sortReverse = (scope.sortKey == key) ? !scope.sortReverse : scope.sortReverse;
		scope.sortKey = key;
	}

	scope.people = [
			  {
			    "id": "5715c444e236108e544c1b86",
			    "age": 38,
			    "name": "Sparks Moreno",
			    "gender": "male",
			    "company": "ENERSOL"
			  },
			  {
			    "id": "5715c444d4846dfe7e0eac19",
			    "age": 38,
			    "name": "Jewel Hinton",
			    "gender": "female",
			    "company": "ZYTRAC"
			  },
			  {
			    "id": "5715c4449b37b7ea78273203",
			    "age": 20,
			    "name": "Flowers Maynard",
			    "gender": "male",
			    "company": "HOMETOWN"
			  },
			  {
			    "id": "5715c444ed78ddb3881f4b9e",
			    "age": 34,
			    "name": "Delores Reynolds",
			    "gender": "female",
			    "company": "XYQAG"
			  },
			  {
			    "id": "5715c4447d819e982839a195",
			    "age": 27,
			    "name": "Fannie Murphy",
			    "gender": "female",
			    "company": "BYTREX"
			  },
			  {
			    "id": "5715c444cf91a2730dd06495",
			    "age": 30,
			    "name": "Virginia Collier",
			    "gender": "female",
			    "company": "CENTICE"
			  },
			  {
			    "id": "5715c44493acfae2991047c9",
			    "age": 25,
			    "name": "Hawkins Sharp",
			    "gender": "male",
			    "company": "QUILK"
			  },
			  {
			    "id": "5715c44470ac04c5fb45d865",
			    "age": 36,
			    "name": "Howell Walsh",
			    "gender": "male",
			    "company": "ZISIS"
			  },
			  {
			    "id": "5715c444facd540ff8eeda49",
			    "age": 22,
			    "name": "Misty Johnson",
			    "gender": "female",
			    "company": "COLLAIRE"
			  },
			  {
			    "id": "5715c444291b0b42a8fc2f1c",
			    "age": 33,
			    "name": "Rosa Jefferson",
			    "gender": "female",
			    "company": "SYBIXTEX"
			  },
			  {
			    "id": "5715c44442af3bc9128fbbf5",
			    "age": 24,
			    "name": "Juliet Reyes",
			    "gender": "female",
			    "company": "EMPIRICA"
			  },
			  {
			    "id": "5715c4440b7baddbfd3b1543",
			    "age": 23,
			    "name": "Susanna Schroeder",
			    "gender": "female",
			    "company": "INFOTRIPS"
			  },
			  {
			    "id": "5715c444e83b10f626a8084c",
			    "age": 29,
			    "name": "Whitney Hampton",
			    "gender": "male",
			    "company": "VELOS"
			  },
			  {
			    "id": "5715c4445da4fd8b3a02e0c5",
			    "age": 21,
			    "name": "Sofia Mooney",
			    "gender": "female",
			    "company": "VIRXO"
			  },
			  {
			    "id": "5715c444fc7f2e810efd4eec",
			    "age": 28,
			    "name": "Kaitlin Gaines",
			    "gender": "female",
			    "company": "QUORDATE"
			  },
			  {
			    "id": "5715c4445708996eaec1a6c4",
			    "age": 33,
			    "name": "Rochelle Randall",
			    "gender": "female",
			    "company": "DATACATOR"
			  },
			  {
			    "id": "5715c44402967e4aadbf5ea2",
			    "age": 23,
			    "name": "Bird Paul",
			    "gender": "male",
			    "company": "LYRIA"
			  },
			  {
			    "id": "5715c4445cfe12766d7c6079",
			    "age": 32,
			    "name": "Koch Baldwin",
			    "gender": "male",
			    "company": "LINGOAGE"
			  },
			  {
			    "id": "5715c44489cba06ca769d5eb",
			    "age": 28,
			    "name": "Dunlap Santos",
			    "gender": "male",
			    "company": "ZIDOX"
			  },
			  {
			    "id": "5715c44463bb92fcfe14152f",
			    "age": 30,
			    "name": "Jeanine Huff",
			    "gender": "female",
			    "company": "SARASONIC"
			  },
			  {
			    "id": "5715c44451482dfba5ea1d24",
			    "age": 28,
			    "name": "Ryan Silva",
			    "gender": "male",
			    "company": "ORBALIX"
			  },
			  {
			    "id": "5715c4442bb901883f2c3965",
			    "age": 32,
			    "name": "Pruitt Maldonado",
			    "gender": "male",
			    "company": "VELITY"
			  },
			  {
			    "id": "5715c4445685bca76297aecb",
			    "age": 33,
			    "name": "Latonya Powell",
			    "gender": "female",
			    "company": "IMMUNICS"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 31,
			    "name": "Shauna Puckett",
			    "gender": "female",
			    "company": "SHADEASE"
			  },
			  {
			    "id": "5715c444ad92e8a472275f2a",
			    "age": 38,
			    "name": "Leanne Calhoun",
			    "gender": "female",
			    "company": "INSOURCE"
			  },
			  {
			    "id": "5715c444c90f44805875aecd",
			    "age": 27,
			    "name": "Mcfadden Carey",
			    "gender": "male",
			    "company": "MYOPIUM"
			  },
			  {
			    "id": "5715c4447fac94d8e64b5eb9",
			    "age": 30,
			    "name": "Beard Best",
			    "gender": "male",
			    "company": "LIQUIDOC"
			  },
			  {
			    "id": "5715c4448f8703b478dc71ae",
			    "age": 32,
			    "name": "Head Ortega",
			    "gender": "male",
			    "company": "NAMEBOX"
			  },
			  {
			    "id": "5715c444b1a9482ed8d8a62c",
			    "age": 34,
			    "name": "Lizzie Mcpherson",
			    "gender": "female",
			    "company": "INSURESYS"
			  },
			  {
			    "id": "5715c44442b8783e5028fb37",
			    "age": 28,
			    "name": "Rosie Nicholson",
			    "gender": "female",
			    "company": "QUOTEZART"
			  },
			  {
			    "id": "5715c444c90ade89ca6b0c9b",
			    "age": 30,
			    "name": "Matthews Estes",
			    "gender": "male",
			    "company": "EARGO"
			  },
			  {
			    "id": "5715c4449d7e54309b6e9932",
			    "age": 38,
			    "name": "Laurie Fischer",
			    "gender": "female",
			    "company": "FUELTON"
			  },
			  {
			    "id": "5715c44491e955fe7031532d",
			    "age": 31,
			    "name": "June Hale",
			    "gender": "female",
			    "company": "TEMORAK"
			  },
			  {
			    "id": "5715c444b5a76dbe845b023e",
			    "age": 38,
			    "name": "Morse Hamilton",
			    "gender": "male",
			    "company": "ACCEL"
			  },
			  {
			    "id": "5715c444fd111ad14d4765b9",
			    "age": 39,
			    "name": "Adriana Logan",
			    "gender": "female",
			    "company": "QUALITERN"
			  },
			  {
			    "id": "5715c4441e13d823e3ae8c08",
			    "age": 39,
			    "name": "Cassandra Miranda",
			    "gender": "female",
			    "company": "AVENETRO"
			  },
			  {
			    "id": "5715c444aadd90fb8ed55072",
			    "age": 20,
			    "name": "Sears Holland",
			    "gender": "male",
			    "company": "SLAMBDA"
			  },
			  {
			    "id": "5715c44488ff818ee7871b29",
			    "age": 28,
			    "name": "Estrada Odom",
			    "gender": "male",
			    "company": "SKINSERVE"
			  },
			  {
			    "id": "5715c444bce9213b9ea4eb95",
			    "age": 21,
			    "name": "Nixon Marsh",
			    "gender": "male",
			    "company": "SOLGAN"
			  },
			  {
			    "id": "5715c4449e21275197bb79ca",
			    "age": 39,
			    "name": "Olivia Fry",
			    "gender": "female",
			    "company": "ZORK"
			  },
			  {
			    "id": "5715c4449f3e148ec3883d7c",
			    "age": 23,
			    "name": "Pierce Marquez",
			    "gender": "male",
			    "company": "LOVEPAD"
			  },
			  {
			    "id": "5715c444a226fdbdfbfd25b1",
			    "age": 24,
			    "name": "Lourdes Bradford",
			    "gender": "female",
			    "company": "BOINK"
			  },
			  {
			    "id": "5715c44441904ac15ebdf947",
			    "age": 28,
			    "name": "Dennis Patterson",
			    "gender": "male",
			    "company": "CORPULSE"
			  },
			  {
			    "id": "5715c444a9dc59b88444685e",
			    "age": 35,
			    "name": "Bowman Kelly",
			    "gender": "male",
			    "company": "ELENTRIX"
			  },
			  {
			    "id": "5715c4441767ad3d34413dad",
			    "age": 26,
			    "name": "Dolores Mcdaniel",
			    "gender": "female",
			    "company": "PAWNAGRA"
			  },
			  {
			    "id": "5715c44436b2ec61e96009e6",
			    "age": 35,
			    "name": "Louella Cabrera",
			    "gender": "female",
			    "company": "CIRCUM"
			  },
			  {
			    "id": "5715c4444f8774c1d31f709c",
			    "age": 21,
			    "name": "Jami Jacobs",
			    "gender": "female",
			    "company": "DECRATEX"
			  },
			  {
			    "id": "5715c444a6d8bfe14f56d064",
			    "age": 26,
			    "name": "Jenifer Roberts",
			    "gender": "female",
			    "company": "MAGNAFONE"
			  },
			  {
			    "id": "5715c4445fe3a7c4884cfe42",
			    "age": 35,
			    "name": "Greene Delaney",
			    "gender": "male",
			    "company": "DENTREX"
			  },
			  {
			    "id": "5715c44453fed3230c8cae0b",
			    "age": 40,
			    "name": "Donovan Herman",
			    "gender": "male",
			    "company": "ROCKABYE"
			  }
			];

}]);


})();