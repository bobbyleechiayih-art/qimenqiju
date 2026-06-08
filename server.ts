process.env.TZ = 'Asia/Kuala_Lumpur';

import express, { Request, Response } from 'express';
import { QimenUtil } from './src/qimen/QimenUtil';
import { Lunar } from 'lunar-typescript';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// 1. The API Route (EXCLUSIVELY for your n8n AI Agent)
app.get('/api/extract-qiju', (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const timeParam = req.query.time as string;
    const date = timeParam ? new Date(timeParam) : new Date();
    
    const lunar = Lunar.fromDate(date);
    const qimenPan = QimenUtil.create(lunar);

    // Map the 9 palaces with your custom Pinyin corrections
    const extraction = qimenPan.九宮.map(cell => {
        let doorDisplay: string = cell.八門 || "";
        
        if (doorDisplay === "景門") doorDisplay = "Jing [景]";
        if (doorDisplay === "驚門") doorDisplay = "Jing [惊]";

        return {
            "宮位": cell.宮位,
            "九星": cell.九星,
            "八門": doorDisplay,
            "八神": cell.八神,
            "天盤干": cell.天盤干,
            "地盤干": cell.地盤干,
            "是否空亡": cell.是否空亡,
            "是否驛馬": cell.是否驛馬
        };
    });

    // Extract the exact calendar data n8n needs to prevent AI hallucinations
    const fullBazi = qimenPan.八字;

    // Output the unified Master Object
    res.json({
        calendar_anchor: {
            date: date.toISOString().split('T')[0],
            day_stem_chinese: fullBazi[2][0],
            day_branch_chinese: fullBazi[2][1],
            full_bazi_array: fullBazi
        },
        chart: extraction
    });
});

// 2. The Frontend Route (Serves your React UI)
app.use(express.static(path.resolve('./dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
