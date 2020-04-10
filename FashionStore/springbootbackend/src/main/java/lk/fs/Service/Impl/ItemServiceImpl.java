package lk.fs.Service.Impl;

import lk.fs.Entity.Item;
import lk.fs.Repository.ItemRepository;
import lk.fs.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }
}
