package lk.fs.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection =  "itemcolors")
public class ItemColor {

    private String itemCode;
    private String itemSize;
    private String itemColor;
    private byte[] image;

    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
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
}


