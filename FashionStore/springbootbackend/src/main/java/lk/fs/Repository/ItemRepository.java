package lk.fs.Repository;

import lk.fs.Entity.Item;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ItemRepository extends MongoRepository<Item ,String> {
}
