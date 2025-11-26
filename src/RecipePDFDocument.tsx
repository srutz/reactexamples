import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import type { Recipe } from "./Recipe";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  container: {
    maxWidth: 600,
  },
  header: {
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  idText: {
    fontSize: 12,
    color: '#666666',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    gap: 15,
  },
  summaryLeft: {
    flex: 1,
    gap: 3,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 5,
    color: '#2a2a2a',
  },
  summaryItem: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 3,
  },
  summaryValue: {
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 200,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 8,
    border: '1px solid #d4d4d4',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#2a2a2a',
  },
  ingredientsList: {
    marginLeft: 15,
    marginBottom: 15,
  },
  ingredientItem: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 4,
    flexDirection: 'row',
  },
  bullet: {
    width: 15,
  },
  instructionsList: {
    marginLeft: 15,
  },
  instructionItem: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 8,
    flexDirection: 'row',
  },
  instructionNumber: {
    width: 25,
    fontWeight: 'bold',
  },
  instructionText: {
    flex: 1,
  },
});

interface RecipePDFViewProps {
  recipe: Recipe;
}

export function RecipePDFDocument({ recipe }: RecipePDFViewProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.idText}>Recipe #{recipe.id}</Text>
          </View>

          {/* Summary and Image */}
          <View style={styles.summaryContainer}>
            <View style={styles.summaryLeft}>
              <Text style={styles.summaryLabel}>Summary:</Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryValue}>Prep Time:</Text> {recipe.prepTimeMinutes} minutes
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryValue}>Cook Time:</Text> {recipe.cookTimeMinutes} minutes
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryValue}>Servings:</Text> {recipe.servings}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryValue}>Difficulty:</Text> {recipe.difficulty}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryValue}>Cuisine:</Text> {recipe.cuisine}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryValue}>Calories per Serving:</Text> {recipe.caloriesPerServing}
              </Text>
            </View>
            
            {/* Image */}
            {recipe.image && (
              <View style={styles.imageContainer}>
                <Image
                  src={recipe.image}
                  style={styles.image}
                />
              </View>
            )}
          </View>

          {/* Ingredients */}
          <Text style={styles.sectionTitle}>Ingredients:</Text>
          <View style={styles.ingredientsList}>
            {recipe.ingredients.map((item, index) => (
              <View key={index} style={styles.ingredientItem}>
                <Text style={styles.bullet}>•</Text>
                <Text>{item}</Text>
              </View>
            ))}
          </View>

          {/* Instructions */}
          <Text style={styles.sectionTitle}>Instructions:</Text>
          <View style={styles.instructionsList}>
            {recipe.instructions.map((item, index) => (
              <View key={index} style={styles.instructionItem}>
                <Text style={styles.instructionNumber}>{index + 1}.</Text>
                <Text style={styles.instructionText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}