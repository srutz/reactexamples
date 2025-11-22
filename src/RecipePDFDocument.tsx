import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Recipe } from "./Recipe";

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    section: {
        marginLeft: 15,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    text: {
        marginBottom: 3,
    },
    listItem: {
        marginLeft: 20,
        marginBottom: 3,
    },
});

export function RecipePDFDocument({ recipe }: { recipe: Recipe }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>{recipe.name}</Text>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Summary:</Text>
                    <Text style={styles.text}>Prep Time: {recipe.prepTimeMinutes} minutes</Text>
                    <Text style={styles.text}>Cook Time: {recipe.cookTimeMinutes} minutes</Text>
                    <Text style={styles.text}>Servings: {recipe.servings}</Text>
                    <Text style={styles.text}>Difficulty: {recipe.difficulty}</Text>
                    <Text style={styles.text}>Cuisine: {recipe.cuisine}</Text>
                    <Text style={styles.text}>Calories per Serving: {recipe.caloriesPerServing}</Text>
                </View>

                <Text style={styles.sectionTitle}>Ingredients:</Text>
                <View>
                    {recipe.ingredients.map((item, index) => (
                        <Text key={index} style={styles.listItem}>• {item}</Text>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Instructions:</Text>
                <View>
                    {recipe.instructions.map((item, index) => (
                        <Text key={index} style={styles.listItem}>{index + 1}. {item}</Text>
                    ))}
                </View>
            </Page>
        </Document>
    );
}
