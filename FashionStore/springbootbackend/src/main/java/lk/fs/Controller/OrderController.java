package lk.fs.Controller;

import lk.fs.Service.EmailUtil;
import org.springframework.web.bind.annotation.*;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

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
            final String fromEmail = "ruvini.hfb@gmail.com"; //requires valid gmail id
            final String password = "Ruv@1234";// correct password for gmail id
            final String toEmail = "divyanirajapaksha@gmail.com"; // can be any email id

            System.out.println("TLSEmail Start");
            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
            props.put("mail.smtp.port", "587"); //TLS Port
            props.put("mail.smtp.auth", "true"); //enable authentication
            props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS
            //props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.debug", "true");

            //create Authenticator object to pass in Session.getInstance argument
            Authenticator auth = new Authenticator() {
                //override the getPasswordAuthentication method
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(fromEmail, password);
                }
            };
            Session session = Session.getInstance(props, auth);
            System.err.println("Mail Sending");

            EmailUtil.sendEmail(session, toEmail, "Level Alert", " level has increased than usual.(5)Please Take Necessary Steps! ThankYou");

            //sendTextMessage("Smoke",user,sensorId,level);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}