package lk.fs.Controller;

import lk.fs.Entity.ItemColor;
import lk.fs.Service.ItemColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping(value = "/ColorsController")
public class ItemColorController {

    public ItemColorController(){
        System.out.println("Gnanod");
    }
    @Autowired
    private ItemColorService itemColorService;

    @PostMapping(value = "addItemColor",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ItemColor addItemColorDetails(@RequestParam("file") MultipartFile file , @RequestParam("itemCode") String itemCode, @RequestParam("itemSize") String itemSize, @RequestParam("itemColor") String itemColor) {

        ItemColor itemColorDetails = new ItemColor();
        try {
            itemColorDetails.setImage(file.getBytes());
            itemColorDetails.setItemCode(itemCode);
            itemColorDetails.setItemColor(itemColor);
            itemColorDetails.setItemSize(itemSize);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return itemColorService.addItemColorDetails(itemColorDetails);

    }

    @PostMapping(value = "addItemColorG")
    public String checkMethod(@RequestBody String name){

        return name;
    }
}
