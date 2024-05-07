package com.spring.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.dto.StudentInfo;

@RestController
@CrossOrigin("http://localhost:4200")
public class StudentController {

	List<StudentInfo> list =new ArrayList<>();	
	
	
	@PostMapping("/save")
	public ResponseEntity<String>  saveInfo(@RequestBody StudentInfo info){
		
		
		list.add(info);
		return new ResponseEntity<>("saved",HttpStatus.OK);
		
		
	
	}
	@GetMapping("/get")
      public ResponseEntity<List<StudentInfo>>  getInfo(){
		
	
		return new ResponseEntity<>(list,HttpStatus.OK);
		
	}
}
