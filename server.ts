import express, { Request, Response } from 'express';
import { QimenUtil } from './src/qimen/QimenUtil';
import { Lunar } from 'lunar-typescript';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// 1. The API Route (For your n8n AI Agent)
app.get('/api/extract-qiju', (req: Request, res: Response) => {
    const timeParam = req.query.time as string;
    const date = timeParam ? new Date(timeParam) : new Date();
    
    const qimenPan = QimenUtil.create(Lunar.fromDate(date));

    // Map to your specific requested structure
    const extraction = qimenPan.九宮.map(cell => {
        let doorDisplay: string = cell.八門 || "";
        
        // Apply your specific correction ledger rule
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

    res.json(extraction);
});

// 2. The Frontend Route (Serves your React UI)
// This points to the static files Vite generates when Coolify builds the app
app.use(express.static(path.resolve('./dist')));

// Catch-all to load your web app for any other URL
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
