function interviewTCS(gradeScore, hscScore, sscScore, candidateName){
      var result = (gradeScore>=70 || hscScore>=80 || sscScore>=90) 
      ? `Congrates ${candidateName} you are eligible for TCS interview` 
      : `Unfortunately you are not eligible for interbview`;
      console.log(result);
}
  interviewTCS(80,86,90,"Himalay Charpe");
  interviewTCS(66,77,88,"Aakhil Bhaje");
  interviewTCS(30,85,99,"Abhishek Yenurkar");