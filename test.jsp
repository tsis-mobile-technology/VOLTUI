<%@page import="com.tsis.tframe.dto.tvo.TValueObject"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	if(request.getAttribute("_TWEB_RESULT_DTO") != null){
		out.println(request.getAttribute("_TWEB_RESULT_DTO"));
	}
	else {
		out.println("[[1,20000],[2,22200],[3,23300],[4,20000],[5,20000],[6,20000],[7,20000],[8,20000],[9,20000],[10,20000],[11,20000],[12,20000],[13,20000],[14,20000],[15,20000],[16,20000],[17,20000],[18,20000],[19,20000],[20,20000],[21,20000],[22,20000],[23,20000],[24,20000],[25,20000],[26,20000],[27,20000],[28,20000],[29,20000],[30,20000]]");
	}
%>