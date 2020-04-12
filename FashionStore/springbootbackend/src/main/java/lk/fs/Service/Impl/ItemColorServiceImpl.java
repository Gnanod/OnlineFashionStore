package lk.fs.Service.Impl;


import lk.fs.Entity.ItemColor;
import lk.fs.Repository.ItemColorRepository;
import lk.fs.Service.ItemColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemColorServiceImpl implements ItemColorService {

    @Autowired
    private ItemColorRepository itemColorRepository;
    @Override
    public ItemColor addItemColorDetails(ItemColor itemColorDetails) {
        return itemColorRepository.save(itemColorDetails);
    }
}
