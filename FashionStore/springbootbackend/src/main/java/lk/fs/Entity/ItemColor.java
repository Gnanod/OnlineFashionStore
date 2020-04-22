package lk.fs.Entity;

import org.bson.types.ObjectId;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection =  "itemcolors")
public class ItemColor {


    private List<ObjectId> itemCode;
    private String itemSize;
    private String itemColor;
//    private String image;
    private byte[] image;
    private double quantity;
    private double price;

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<ObjectId> getItemCode() {
        return itemCode;
    }

    public void setItemCode(List<ObjectId> itemCode) {
        this.itemCode = itemCode;
    }

    public String getItemSize() {
        return itemSize;
    }

    public void setItemSize(String itemSize) {
        this.itemSize = itemSize;
    }

    public String getItemColor() {
        return itemColor;
    }

    public void setItemColor(String itemColor) {
        this.itemColor = itemColor;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }


//    public String getImage() {
//        return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }
}


