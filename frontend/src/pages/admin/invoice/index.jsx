import React, { Fragment } from 'react';

import { Page, Document, Image, StyleSheet, View, Text,PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    container1: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        borderTop:'0px',
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },

    page: {
         fontFamily: 'Helvetica',
        fontSize: 10,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 80,
        lineHeight: 1.5,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#000000',
    }, 
    pageNumbers: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        textAlign: 'center',
        marginTop: 20,
        color: 'purple'
  },
    pageFooter: {
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        textAlign: 'center',
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'purple',
        marginRight: 10,
        marginLeft: 10
    },
    logo: {
        top: 1,
        width: 350,
        height: 50,
        align: 'left',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10
    },
    div:{
        display:'flex',
        justifyContent:'center',
        width:'100vw',
        alignItems:'center',
        height:'100vh'
    },
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
    
  });

const Invoice = () =>{
    return(
        <Fragment >
            <PDFViewer style={styles.div} width='1000' height='500' className='app'>
                <Document>
                    <Page style={styles.page} size="A4">
                        <View>
                            <Text style={{fontSize:'20px',textAlign:'center',textDecoration:'underline',marginBottom:'20px',marginTop:'20px'}}>INVOICE BILL</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around',marginTop:'25px'}}>
                            <View >
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Bill To : Regimudi Uday Kiran</Text>
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Address : 1-2/A Khammam</Text>
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Invoice Number : 201525</Text>
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Date : 24/02/2024</Text>
                                
                            </View>
                            <View >
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Account Name : Regimudi Uday Kiran</Text>
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Account Number : 9358245241511</Text>
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Bank Name : STATE BANK OF INDIA</Text>
                                <Text style={{marginBottom:'5px',fontSize:'11px'}}>Reference/Invoice Number : 201525</Text>
                                
                            </View>

                            
                        </View>
                        <View style={{margin:'20px'}}>
                            <Text style={{fontSize:'12px'}}>Note: Kindly ensure that the invoice number is mentioned in the payment reference to avoid any delays in processing.</Text>
                        </View>
                    <View style={styles.tableContainer}>
                        <View style={styles.container}>
                            <Text style={{width:'20%'}} >Invoice Number</Text>
                            <Text style={{width:'20%'}}>Name</Text>
                            <Text style={{width:'20%'}}>Total Payment</Text>
                            <Text style={{width:'20%'}}>Total Paied</Text>
                            <Text style={{width:'20%'}}>Remaining Due</Text>
                        </View>
                    </View>
                    <View style={styles.tableContainer}>
                        <View style={styles.container1}>
                            <Text style={{width:'20%'}} >201525</Text>
                            <Text style={{width:'20%'}}>Uday Kiran</Text>
                            <Text style={{width:'20%'}}>1,15,000</Text>
                            <Text style={{width:'20%'}}>15000</Text>
                            <Text style={{width:'20%'}}>100000</Text>
                        </View>
                    </View>
                    <View style={styles.tableContainer}>
                        <View style={styles.container1}>
                            <Text style={{width:'20%'}} >201526</Text>
                            <Text style={{width:'20%'}}>Uday Kiran</Text>
                            <Text style={{width:'20%'}}>1,15,000</Text>
                            <Text style={{width:'20%'}}>15000</Text>
                            <Text style={{width:'20%'}}>100000</Text>
                        </View>
                    </View>
                    <View style={styles.tableContainer}>
                        <View style={styles.container1}>
                            <Text style={{width:'20%'}} >201527</Text>
                            <Text style={{width:'20%'}}>Uday Kiran</Text>
                            <Text style={{width:'20%'}}>1,15,000</Text>
                            <Text style={{width:'20%'}}>15000</Text>
                            <Text style={{width:'20%'}}>100000</Text>
                        </View>
                    </View>
                    <View style={styles.tableContainer}>
                        <View style={styles.container1}>
                            <Text style={{width:'20%'}} >201528</Text>
                            <Text style={{width:'20%'}}>Uday Kiran</Text>
                            <Text style={{width:'20%'}}>1,15,000</Text>
                            <Text style={{width:'20%'}}>15000</Text>
                            <Text style={{width:'20%'}}>100000</Text>
                        </View>
                    </View>
                    <View style={{margin:'20px'}}>
                        <Text style={{fontSize:'11px'}}>Thank you for your prompt attention to this matter. If you have any questions or concerns regarding this invoice, please don't hesitate to contact us at uuday3804@gmail.com.Sincerely,</Text>
                    </View>
                    </Page>
                </Document>
            </PDFViewer>
        </Fragment>
        
    )
}

export default Invoice