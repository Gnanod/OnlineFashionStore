package lk.fs.Repository;


import lk.fs.Entity.ItemColor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemColorRepository extends MongoRepository<ItemColor,String> {
}
