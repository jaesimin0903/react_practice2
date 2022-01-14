import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar, Doughnut, Line } from "react-chartjs-2"
import Chart from 'chart.js/auto'

const Introduction = () => {
    
    
    
   
    
        return (
        <section>
        
        
        <a name="introduction" className="tm"></a>
        
        <div name="home">
        
            <h2 >Introduction</h2>
            <br />
            <div className="p-5 mb-4 bg-warning rounded-3">
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-5">
                            <img className=""style={{height:"100px"}} src="images/i15720255818.png"></img>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        </div>
                        <div className="col-7">
                            <div className="row py-3">
                                <div className="col-6">
                                    <h3><b>이름 : </b></h3>
                                    <h3><b>학교 : </b></h3>
                                    <h3><b>생년월일 : </b></h3>
                                    <h3><b>주 언어 : </b></h3>
                                </div>
                                <div className="col-6">
                                    <h3>최재민</h3>
                                    <h3>동국대학교</h3>
                                    <h3>98.09.03</h3>
                                    <h3>C++, Java</h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row py-1 text-center">
                        <div className="col-lg">
                            <div className="row">
                                <h3><b>주요 이력</b></h3>
                                <h4>17.03 ~ 17.12 / 한성대 1학년 수료</h4>
                                <h4>18.03 ~ 19.11 / 육군 병장 만기전역</h4>
                                <h4>20.03 ~ 20.12 / 한성대 2학년 수료</h4>
                                <h4>21.03 ~ 현재 / 동국대 편입학</h4>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section> 
    )
        
}

export default Introduction
