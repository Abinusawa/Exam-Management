//parent of Card.js component or model for card
import React from 'react';
import SummaryCard from '../Card/SummaryCard';
import ExamInfo from '../ExamInfo/ExamInfo'
import CompletedExam from '../ExamInfo/CompletedExam';


const CardList = ({ summarydata=[], examInfoData=[], completedExamInfo=[] }) => {
	return (
		<div>
			{
				summarydata.map((user, i) => 
				{
					return (
						<SummaryCard 
						key={i} 
						id={summarydata[i].id} 
						Title={summarydata[i].Title}
						img={summarydata[i].img}
						amount={summarydata[i].amount}
						/>
					);
				})
			}
			{
				examInfoData.map((user, i) => 
				{
					return (
						<ExamInfo 
						key={i} 
						id={examInfoData[i].id} 
						Title={examInfoData[i].Title}
						clockimg={examInfoData[i].clockimg}
						time={examInfoData[i].time}
						dateimg={examInfoData[i].dateimg}
						date={examInfoData[i].date}
						status={examInfoData[i].status}
						/>
					);
				})
			}
			{
				completedExamInfo.map((user, i) => 
				{
					return (
						<CompletedExam 
						key={i} 
						id={completedExamInfo[i].id} 
						Title={completedExamInfo[i].Title}
						clockimg={completedExamInfo[i].clockimg}
						time={completedExamInfo[i].time}
						dateimg={completedExamInfo[i].dateimg}
						date={completedExamInfo[i].date}
						status={completedExamInfo[i].status}
						/>
					);
				})
			}			
		</div>
	);
}

export default CardList;
