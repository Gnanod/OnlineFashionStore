package lk.fs.Controller;

import lk.fs.Service.EmailUtil;
import org.springframework.web.bind.annotation.*;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;

@CrossOrigin
@RestController
@RequestMapping(value = "/OrderController")
public class OrderController {

    @GetMapping(value = "/sendMail/{mail}/{orderId}/{itemTotal}")
    public void sendEmail(@PathVariable String mail, @PathVariable String orderId, @PathVariable float itemTotal) {

        System.out.println("GGGGGGGGG");
        System.out.println("mail" + mail);
        System.out.println("orderId" + orderId);
        System.out.println("itemTotal" + itemTotal);

        try {
            final String fromEmail = "fashionstoregtsd@gmail.com"; //requires valid gmail id
            final String password = "Fashionstore123"; // correct password for gmail id
            final String toEmail = "1995gnanod@gmail.com"; // can be any email id

            System.out.println("TLSEmail Start");
            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
            props.put("mail.smtp.port", "587"); //TLS Port
            props.put("mail.smtp.auth", "true"); //enable authentication
            props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS

            //create Authenticator object to pass in Session.getInstance argument
            Authenticator auth = new Authenticator() {
                //override the getPasswordAuthentication method
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(fromEmail, password);
                }
            };
            Session session = Session.getInstance(props, auth);

            EmailUtil.sendEmail(session, toEmail,"TLSEmail Testing Subject", "TLSEmail Testing Body");


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
