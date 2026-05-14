import express from 'express';
import { QimenUtil } from './qimen/QimenUtil';
import { Lunar } from 'lunar-typescript';
import moment from 'moment';

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/extract-qiju', (req, res) => {
    // Get time from query or default to now
    const timeParam = req.query.time as string;
    const date = timeParam ? new Date(timeParam) : new Date();
    
    // Use your existing logic from QimenUtil.ts
    const qimenPan = QimenUtil.create(Lunar.fromDate(date));

    // Map to your specific requested structure
    const extraction = qimenPan.九宮.map(cell => {
        // Special handling for "Jing" as per your correction ledger
        let door = cell.八門;
        if (door === "景門") door = "Jing [景]";
        if (door === "驚門") door = "Jing [惊]";

        return {
            "宮位": cell.宮位,
            "九星": cell.九星,
            "八門": door,
            "八神": cell.八神,
            "天盤干": cell.天盤干,
            "地盤干": cell.地盤干,
            "是否空亡": cell.是否空亡,
            "是否驛馬": cell.是否驛馬
        };
    });

    res.json(extraction);
});

app.listen(port, () => {
    console.log(`Extraction API running on port ${port}`);
});
