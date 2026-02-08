import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import './Quote.css';

function Quote() {
    return (
        <div className="quote-wrapper">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
                <i className="quote-text">"There is only one good, knowledge, and one evil, ignorance."</i>
                <p className="text-muted-foreground mt-2">
                    — Socrates
                </p>
            </motion.div>
        </div>
    );
}

export default Quote;