package com.spring.dto;

public class StudentInfo {
	
	
	private String  stuName;
	private String course;
	private long phNo;
	public String getStuName() {
		return  stuName;
	}
	public void setStuName(String name) {
		this.stuName = name;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public long getPhNo() {
		return phNo;
	}
	public void setPhNo(long phNo) {
		this.phNo = phNo;
	}

}
