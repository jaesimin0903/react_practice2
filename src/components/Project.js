import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar, Doughnut, Line } from "react-chartjs-2"
import Chart from 'chart.js/auto'

const Introduction = () => {
    
    
        return (
        <section>
        
        
        <a name="projects" className="tm"></a>
        <div name="home">
        
        <h2 >Projects</h2>
            <br />
            <div className="p-5 mb-4 bg-primary rounded-3">
                <div className="container-fluid py-5">
                    <div className="row">
                        <h3><b>1. PITMON</b></h3>
                        <h3><b>팀원 수 : </b>4명</h3>
                        <h3><b>사용한 언어 : </b>C++, Flutter</h3>
                        <h3><b>제작기간 : </b>21.11.01~21.12.01</h3>
                        <h3><b>프로젝트 설명 : </b>아두이노를 이용하여 운동센서를 개발</h3>
                        <h3><b>사진</b></h3>
                    </div>
                </div>
            </div>
            <div className="p-5 mb-4 bg-primary rounded-3">
                <div className="container-fluid py-5">
                    <div className="row">
                        <h3><b>2. MOVIESTAR</b></h3>
                        <h3><b>팀원 수 : </b>2명</h3>
                        <h3><b>사용한 언어 : </b>HTML, CSS, JavaScript, JSP, MySQL</h3>
                        <h3><b>제작기간 : </b>21.9.01~21.12.01</h3>
                        <h3><b>프로젝트 설명 : </b>영화 평점사이트 개발, 영화진흥위원회 API 를 사용하여 박스오피스 구현</h3>
                        <h3><b>사진</b></h3>
                    </div>
                </div>
            </div>
        </div>
      </section> 
    )
        
}

export default Introduction
